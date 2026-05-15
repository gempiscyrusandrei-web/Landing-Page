const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll("[data-counter]").forEach((counter) => {
  const target = Number(counter.dataset.counter || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1400;
  let started = false;

  const animate = () => {
    if (started) return;
    started = true;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) animate();
  }, { threshold: 0.35 });

  observer.observe(counter);
});

const sanitize = (value) => value.replace(/[<>]/g, "").trim();

document.querySelectorAll("form[data-lead-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  const thankYou = document.querySelector(`[data-thank-you="${form.dataset.leadForm}"]`);

  form.addEventListener("submit", async (event) => {
    const fields = form.querySelectorAll("input, select, textarea");
    let valid = true;

    fields.forEach((field) => {
      if (field.name && field.type !== "hidden") {
        field.value = sanitize(field.value);
      }
      if (field.hasAttribute("required") && !field.value.trim()) {
        valid = false;
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }
    });

    const email = form.querySelector('input[type="email"]');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false;
      email.setAttribute("aria-invalid", "true");
    }

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) {
      event.preventDefault();
      return;
    }

    if (!valid) {
      event.preventDefault();
      if (status) {
        status.textContent = "Please complete the required fields with a valid email address.";
        status.className = "form-status error";
      }
      return;
    }

    if (form.dataset.async === "true") {
      event.preventDefault();
      const body = new FormData(form);
      const encodedBody = new URLSearchParams(body);

      try {
        const response = await fetch(form.action || "/", {
          method: "POST",
          body: encodedBody.toString(),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });

        if (!response.ok) throw new Error("Form submission failed");
        form.reset();
        if (status) {
          status.textContent = "Received. Our automation team will follow up shortly.";
          status.className = "form-status success";
        }
        if (thankYou) thankYou.classList.add("show");
      } catch (error) {
        if (status) {
          status.textContent = "Something went wrong. Please try again or email the team directly.";
          status.className = "form-status error";
        }
      }
    }
  });
});

window.addEventListener("pageshow", () => {
  document.body.classList.add("page-ready");
});

if (window.AOS) {
  AOS.init({
    duration: 760,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
  });
}

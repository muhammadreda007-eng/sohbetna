(function () {
  "use strict";

  const minSubmitMs = 1800;
   function formText(key) {
   const lang = document.documentElement.lang === "en" ? "en" : "ar";
   const translations = window.AppTranslations || {};
  return translations[lang]?.[key] || translations.ar?.[key] || key;
}
  function value(form, name) {
    const field = form.elements[name];
    if (!field) return "";
    if (field.type === "checkbox") return Boolean(field.checked);
    return String(field.value || "").trim();
  }

  function setAlert(form, message, type) {
    const alert = form.querySelector("[data-form-alert]");
    if (!alert) return;
    alert.textContent = message;
    alert.className = "form-alert is-" + (type || "warning");
  }

  function normalizePhone(phone) {
    return String(phone || "")
      .trim()
      .replace(/[()\s.-]/g, "")
      .replace(/^00/, "+");
  }

  function isInternationalPhone(phone) {
    return /^\+[1-9][0-9]{7,14}$/.test(phone);
  }

  function validate(form) {
  if (value(form, "hp_token")) {
    return formText("form.submitError");
  }

  const started = Number(value(form, "started_at"));
  if (started && Date.now() - started < minSubmitMs) {
    return formText("form.tooFast");
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    return formText("form.required");
  }

  if (form.dataset.form === "waitlist") {
    const phone = normalizePhone(value(form, "phone"));
    if (!isInternationalPhone(phone)) {
      return formText("form.phoneHint");
    }
    form.elements.phone.value = phone;
  }

  return "";
}
  function payloadFor(form) {
    const type = form.dataset.form;
    if (type === "waitlist") {
      return {
        table: "waitlist",
        data: {
          full_name: value(form, "full_name"),
          email: value(form, "email").toLowerCase(),
          phone: normalizePhone(value(form, "phone")),
          platform: value(form, "platform"),
          consent: value(form, "consent"),
          status: "new"
        }
      };
    }
    if (type === "support") {
      return {
        table: "support_requests",
        data: {
          full_name: value(form, "full_name"),
          email: value(form, "email").toLowerCase(),
          category: value(form, "category"),
          subject: value(form, "subject"),
          message: value(form, "message"),
          status: "new"
        }
      };
    }
    if (type === "delete-account") {
      return {
        table: "account_deletion_requests",
        data: {
          username_or_email: value(form, "username_or_email"),
          contact_email: value(form, "contact_email").toLowerCase(),
          reason: value(form, "reason") || null,
          confirmation: value(form, "confirmation"),
          status: "new"
        }
      };
    }
    return {
      table: "contact_messages",
      data: {
        full_name: value(form, "full_name"),
        email: value(form, "email").toLowerCase(),
        phone: value(form, "phone") || null,
        subject: value(form, "subject"),
        message: value(form, "message"),
        status: "new"
      }
    };
  }

  async function submitForm(form) {
  const error = validate(form);
  if (error) {
    setAlert(form, error, "error");
    return;
  }

  const button = form.querySelector("button[type='submit']");
  const originalText = button.textContent;

  button.disabled = true;
  button.textContent = formText("form.sending");

  try {
    const { table, data } = payloadFor(form);
    await window.AppApi.insertPublic(table, data);

    form.reset();

    const started = form.querySelector("[name='started_at']");
    if (started) started.value = String(Date.now());

    setAlert(form, formText("form.success"), "success");
  } catch (err) {
    const unavailable =
      err?.message === "SUPABASE_NOT_CONFIGURED" ||
      err?.message === "SUPABASE_LIBRARY_MISSING";

    setAlert(
      form,
      formText(unavailable ? "form.unavailable" : "form.submitError"),
      unavailable ? "warning" : "error"
    );
  } finally {
    button.disabled = false;
    button.textContent = button.dataset.i18n
      ? formText(button.dataset.i18n)
      : originalText || formText("form.send");
  }
}
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form[data-form]").forEach((form) => {
      const started = form.querySelector("[name='started_at']");
      if (started) started.value = String(Date.now());
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitForm(form);
      });
    });
  });
})();

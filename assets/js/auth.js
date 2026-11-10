(function () {
  "use strict";
  function authText(key) {
  const lang = document.documentElement.lang === "en" ? "en" : "ar";
  const translations = window.AppTranslations || {};
  return translations[lang]?.[key] || translations.ar?.[key] || key;
}
  function authAlert(message, type = "error") {
    document.querySelectorAll("[data-auth-alert]").forEach((el) => {
      el.textContent = message;
      el.className = "form-alert is-" + type;
    });
  }

  async function isAdminUser(sb) {
    const { data, error } = await sb.rpc("is_admin");
    if (error) throw error;
    return Boolean(data);
  }

  async function requireAdmin() {
    if (!document.body.dataset.adminProtected) return true;
    if (!window.AppSupabase.isConfigured()) {
      document.body.classList.add("admin-locked");
      document.querySelectorAll("[data-admin-setup]").forEach((el) => {
        el.hidden = false;
        el.dataset.i18n = "auth.locked";
        el.textContent = authText("auth.locked");
});
      return false;
    }
    const sb = window.AppSupabase.getClient();
    const { data: sessionData } = await sb.auth.getSession();
    if (!sessionData.session) {
      location.href = "login.html";
      return false;
    }
    const ok = await isAdminUser(sb);
    if (!ok) {
      await sb.auth.signOut();
      location.href = "login.html?unauthorized=1";
      return false;
    }
    document.dispatchEvent(new CustomEvent("app:admin-ready"));
    return true;
  }
async function login(form) {
  if (!window.AppSupabase.isConfigured()) {
    authAlert(authText("auth.unavailable"), "warning");
    return;
  }

  const button = form.querySelector("button[type='submit']");
  button.disabled = true;
  button.dataset.i18n = "auth.checking";
  button.textContent = authText("auth.checking");

  try {
    const sb = window.AppSupabase.getClient();
    const { error } = await sb.auth.signInWithPassword({
      email: form.elements.email.value.trim(),
      password: form.elements.password.value
    });
    if (error) throw error;

    if (!(await isAdminUser(sb))) {
      await sb.auth.signOut();
      authAlert(authText("auth.denied"));
      return;
    }

    location.href = "dashboard.html";
  } catch (_) {
    authAlert(authText("auth.error"));
  } finally {
    button.disabled = false;
    button.dataset.i18n = "auth.login";
    button.textContent = authText("auth.login");
  }
}
    document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("[data-login-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      login(event.currentTarget);
    });
    document.querySelector("[data-toggle-password]")?.addEventListener("click", (event) => {
      const input = document.querySelector("input[name='password']");
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      event.currentTarget.dataset.i18n = show ? "auth.hide" : "auth.show";
      event.currentTarget.textContent = authText(event.currentTarget.dataset.i18n);
    });
    document.querySelectorAll("[data-logout]").forEach((button) => {
      button.addEventListener("click", async () => {
        try { await window.AppSupabase.getClient().auth.signOut(); } catch (_) {}
        location.href = "login.html";
      });
    });
    requireAdmin();
  });

  window.AppAuth = { requireAdmin };
})();
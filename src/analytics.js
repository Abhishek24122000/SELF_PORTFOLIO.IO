const GA_ID = "G-0SS0WQYED3";

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}

export function trackPageContext(pathname) {
  const path = pathname || window.location.pathname;

  trackEvent("portfolio_page_context", {
    page_path: path,
    page_title: document.title,
  });
}

export function trackLinkClick({ destination, label, location }) {
  trackEvent("portfolio_link_click", {
    destination,
    link_label: label,
    link_location: location,
  });
}

export function trackProjectAction({ projectId, projectName, category, action }) {
  trackEvent("portfolio_project_action", {
    project_id: projectId,
    project_name: projectName,
    project_category: category,
    action,
  });
}

export function trackResumeOpen(resumeType) {
  trackEvent("portfolio_resume_open", {
    resume_type: resumeType,
  });
}

export function trackCertificateOpen(certificateName) {
  trackEvent("portfolio_certificate_open", {
    certificate_name: certificateName,
  });
}

export function installClarity() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!clarityId || window.clarity) {
    return;
  }

  window.clarity =
    window.clarity ||
    function (...args) {
      (window.clarity.q = window.clarity.q || []).push(args);
    };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${clarityId}`;

  const firstScript = document.getElementsByTagName("script")[0];

  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
}

export function setClarityPageContext(pathname) {
  if (typeof window === "undefined" || typeof window.clarity !== "function") {
    return;
  }

  const path = pathname || window.location.pathname;

  window.clarity("set", "page_path", path);
}

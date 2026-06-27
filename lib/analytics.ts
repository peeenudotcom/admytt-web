/* ===========================================================================
   Privacy-aware analytics stub.
   Emits typed marketing events to a `dataLayer` (and console in dev). It never
   forwards form-field values, student data, or any sensitive CRM content —
   only the event name plus non-sensitive context (page, CTA location, plan).
   Wire `dataLayer` to GA4 / Plausible / PostHog at integration time.
   =========================================================================== */

export type AnalyticsEvent =
  | "nav_cta_clicked"
  | "hero_demo_clicked"
  | "product_tour_started"
  | "product_stage_viewed"
  | "pricing_viewed"
  | "plan_selected"
  | "demo_form_started"
  | "demo_form_submitted"
  | "security_page_viewed"
  | "integration_viewed";

type Context = {
  location?: string;
  page?: string;
  plan?: string;
  stage?: string;
  billing?: "monthly" | "annual";
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, context: Context = {}): void {
  if (typeof window === "undefined") return;
  const payload = {
    event,
    page: context.page ?? window.location.pathname,
    ...context,
    ts: Date.now(),
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", payload);
  }
}

/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

/**
 * Frontend widget that runs on the published page.
 * Reads data-se-* attributes from the snippet <section>, builds the embed
 * URL, injects the iframe, and listens for auto-resize postMessages.
 */
publicWidget.registry.SolarEstimatorFrontend = publicWidget.Widget.extend({
    selector: ".s_solar_estimator",

    EMBED_BASE: "https://www.solar-estimator.io/embed",

    // Maps data-attribute names → URL parameter names
    PARAM_MAP: {
        "se-tools":     "tools",
        "se-theme":     "theme",
        "se-accent":    "accent",
        "se-radius":    "radius",
        "se-border":    "border",
        "se-shadow":    "shadow",
        "se-padding":   "padding",
        "se-fontsize":  "fontsize",
        "se-ref":       "ref",
        "se-leadgate":  "leadgate",
        "se-leademail": "leademail",
        "se-hide":      "hide",
        "se-compass":   "compass",
    },

    // Default values — only include param in URL if it differs
    DEFAULTS: {
        tools:    "calculator",
        theme:    "light",
        accent:   "#f59e0b",
        radius:   "12",
        border:   "none",
        shadow:   "none",
        padding:  "normal",
        fontsize: "base",
        compass:  "visual",
    },

    /**
     * @override
     */
    start() {
        this._super(...arguments);
        this._buildIframe();
        this._bindResize();
    },

    /**
     * @override
     */
    destroy() {
        if (this._resizeHandler) {
            window.removeEventListener("message", this._resizeHandler);
        }
        this._super(...arguments);
    },

    // ------------------------------------------------------------------
    // Private
    // ------------------------------------------------------------------

    /**
     * Read data attributes from the snippet section and build the iframe.
     */
    _buildIframe() {
        const wrapper = this.el.querySelector(".s_solar_estimator_wrapper");
        if (!wrapper) return;

        const url = this._buildUrl();
        const radius = this.el.dataset.seRadius || "12";

        wrapper.innerHTML = "";

        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.width = "100%";
        iframe.height = "800";
        iframe.frameBorder = "0";
        iframe.loading = "lazy";
        iframe.title = "Solar Estimator Calculator";
        iframe.style.cssText = [
            "border: none",
            `border-radius: ${radius}px`,
            "max-width: 100%",
            "display: block",
        ].join("; ");

        wrapper.appendChild(iframe);
    },

    /**
     * Construct the embed URL from data-se-* attributes.
     */
    _buildUrl() {
        const params = new URLSearchParams();

        for (const [attr, param] of Object.entries(this.PARAM_MAP)) {
            const raw = this.el.dataset[this._toCamel(attr)];
            if (!raw) continue;

            const value = raw.trim();
            if (!value) continue;

            // Skip if it matches the default
            if (this.DEFAULTS[param] && value === this.DEFAULTS[param]) continue;

            // Lead gate: only include if leademail is set
            if (param === "leadgate") continue; // handled below
            if (param === "leademail" && value) {
                params.set("leadgate", "1");
                params.set("leademail", value);
                continue;
            }

            params.set(param, value);
        }

        const qs = params.toString();
        return qs ? `${this.EMBED_BASE}?${qs}` : this.EMBED_BASE;
    },

    /**
     * Listen for postMessage resize events from the embedded calculator.
     */
    _bindResize() {
        this._resizeHandler = (e) => {
            if (e.data && e.data.type === "solar-embed-resize") {
                const iframes = this.el.querySelectorAll("iframe");
                iframes.forEach((iframe) => {
                    iframe.style.height = e.data.height + "px";
                });
            }
        };
        window.addEventListener("message", this._resizeHandler);
    },

    /**
     * Convert "se-tools" → "seTools" for dataset access.
     */
    _toCamel(str) {
        return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    },
});

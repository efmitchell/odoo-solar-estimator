/** @odoo-module **/

import options from "@web_editor/js/editor/snippets/options";

/**
 * Website Builder option handler for the Solar Estimator snippet.
 * Updates data-se-* attributes when the user changes options in the
 * right-hand panel, and refreshes the iframe preview in the editor.
 */
options.registry.SolarEstimatorOptions = options.Class.extend({

    // ------------------------------------------------------------------
    // Option change handlers
    // ------------------------------------------------------------------

    /**
     * Called when any data-attribute option changes.
     * We re-read all attributes and rebuild the iframe so the editor
     * preview stays in sync with the configuration.
     */
    onFocus() {
        // Ensure the iframe is rendered when the snippet is first selected
        this._refreshPreview();
    },

    /**
     * Triggered after any we-select / we-input / we-colorpicker change.
     */
    async updateUI() {
        await this._super(...arguments);
        this._refreshPreview();
    },

    // ------------------------------------------------------------------
    // Private
    // ------------------------------------------------------------------

    /**
     * Re-trigger the frontend widget to rebuild the iframe.
     * In the editor, the public widget may not auto-update, so we
     * manually rebuild the iframe from current data attributes.
     */
    _refreshPreview() {
        const section = this.$target[0];
        if (!section) return;

        const wrapper = section.querySelector(".s_solar_estimator_wrapper");
        if (!wrapper) return;

        const url = this._buildPreviewUrl(section);
        const radius = section.dataset.seRadius || "12";

        // Check if iframe already exists with same URL
        const existing = wrapper.querySelector("iframe");
        if (existing && existing.src === url) return;

        wrapper.innerHTML = "";

        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.width = "100%";
        iframe.height = "800";
        iframe.frameBorder = "0";
        iframe.loading = "lazy";
        iframe.title = "Solar Estimator Calculator (Preview)";
        iframe.style.cssText = [
            "border: none",
            `border-radius: ${radius}px`,
            "max-width: 100%",
            "display: block",
            "pointer-events: none",  // prevent click-through in editor
        ].join("; ");

        wrapper.appendChild(iframe);
    },

    /**
     * Build the embed URL from data-se-* attributes on the section element.
     */
    _buildPreviewUrl(section) {
        const BASE = "https://www.solar-estimator.io/embed";
        const DEFAULTS = {
            tools: "calculator", theme: "light", accent: "#f59e0b",
            radius: "12", border: "none", shadow: "none",
            padding: "normal", fontsize: "base", compass: "visual",
        };
        const MAP = {
            seTools: "tools", seTheme: "theme", seAccent: "accent",
            seRadius: "radius", seBorder: "border", seShadow: "shadow",
            sePadding: "padding", seFontsize: "fontsize", seRef: "ref",
            seLeademail: "leademail", seHide: "hide", seCompass: "compass",
        };

        const params = new URLSearchParams();

        for (const [dataKey, param] of Object.entries(MAP)) {
            const value = (section.dataset[dataKey] || "").trim();
            if (!value) continue;
            if (DEFAULTS[param] && value === DEFAULTS[param]) continue;

            if (param === "leademail" && value) {
                params.set("leadgate", "1");
                params.set("leademail", value);
                continue;
            }

            params.set(param, value);
        }

        const qs = params.toString();
        return qs ? `${BASE}?${qs}` : BASE;
    },
});

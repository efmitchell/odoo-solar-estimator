{
    "name": "Solar Estimator Embed",
    "version": "17.0.1.0.0",
    "category": "Website",
    "summary": "Embed a free solar panel calculator on your Odoo website",
    "description": """
Solar Estimator Embed
=====================

Add a professional solar panel cost and savings calculator to your Odoo
website with a simple drag-and-drop snippet.

FREE features (no account required)
------------------------------------
* Full solar system estimator: cost, savings, payback, panel count
* Battery storage calculator and interactive solar map
* Supports US, UK, Australia, Canada, New Zealand, Ireland, Spain
* Fully customisable: colours, theme, layout, visible sections
* Auto-resizing iframe — adapts to content height automatically
* Mobile responsive

PRO features (license key required)
------------------------------------
* Lead capture gate — collect visitor name, email, and phone before
  showing results
* Email notifications — receive leads directly to your inbox with full
  solar estimate details
* Get your license key at https://www.solar-estimator.io/odoo

Usage
-----
1. Install the module
2. Open your website in the Odoo Website Builder
3. Drag the "Solar Estimator" snippet from the Features section onto your page
4. Click the snippet to customise: theme, accent colour, tools
5. (Optional) Enter your license key and email to enable lead capture
6. Save and publish

Calculator powered by https://www.solar-estimator.io
    """,
    "author": "Solar Estimator",
    "website": "https://www.solar-estimator.io",
    "license": "LGPL-3",
    "depends": ["website"],
    "data": [
        "views/snippets.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "solar_estimator_embed/static/src/scss/embed_snippet.scss",
            "solar_estimator_embed/static/src/js/embed_frontend.js",
        ],
        "website.assets_wysiwyg": [
            "solar_estimator_embed/static/src/js/embed_editor.js",
            "solar_estimator_embed/static/src/xml/embed_options.xml",
        ],
    },
    "images": [
        "static/description/banner.svg",
    ],
    "price": 0,
    "currency": "EUR",
    "installable": True,
    "auto_install": False,
    "application": False,
}

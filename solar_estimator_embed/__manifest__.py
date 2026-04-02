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

Features
--------
* Drag-and-drop website building block — no coding required
* Full solar system estimator: cost, savings, payback, panel count
* Optional battery storage calculator
* Optional interactive solar map estimator
* Supports US, UK, Australia, Canada, New Zealand, Ireland, Spain
* Lead capture gate — collect visitor contact details before showing results
* Fully customisable: colours, theme, layout, visible sections
* Auto-resizing iframe — adapts to content height automatically
* Mobile responsive
* "Powered by Solar-Estimator.io" attribution

Usage
-----
1. Install the module
2. Open your website in the Odoo Website Builder
3. Drag the "Solar Estimator" snippet from the Features section onto your page
4. Click the snippet to customise: theme, accent colour, tools, lead capture
5. Save and publish

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
    "installable": True,
    "auto_install": False,
    "application": False,
}

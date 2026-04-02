{
    "name": "Solar Estimator Embed",
    "version": "17.0.1.0.0",
    "category": "Website",
    "summary": "Embed a free solar panel calculator on your Odoo website",
    "description": """
Solar Estimator Embed
=====================

Add a professional solar panel cost and savings calculator to your Odoo
website with a simple drag-and-drop snippet. No account or activation
key required — the module is fully functional out of the box.

Features
--------
* Full solar system estimator: cost, savings, payback, panel count
* Battery storage calculator and interactive solar map
* Supports US, UK, Australia, Canada, New Zealand, Ireland, Spain
* Fully customisable: colours, theme, layout, visible sections
* Auto-resizing iframe — adapts to content height automatically
* Mobile responsive

Optional lead capture integration
----------------------------------
This module optionally supports lead capture via the Solar Estimator
external service. When enabled by the administrator, visitors enter
their contact details before viewing results. This is entirely optional
and the calculator works fully without it.

External service & data disclosure
-----------------------------------
This module requires an internet connection. The calculator is loaded
via an embedded iframe from the Solar Estimator service.

Data transmitted:
* Calculator inputs are processed in the visitor's browser and are not
  stored on external servers.
* If lead capture is enabled: visitor-submitted contact details (name,
  email, phone) are sent to the external service for email notification.

No data is collected or transmitted without explicit administrator
configuration.

Usage
-----
1. Install the module
2. Open your website in the Odoo Website Builder
3. Drag the "Solar Estimator" snippet from the Features section
4. Click the snippet to customise: theme, accent colour, tools
5. Save and publish
    """,
    "author": "Solar Estimator",
    "website": "https://www.solar-estimator.io/odoo",
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
        "static/description/banner.png",
    ],
    "price": 0,
    "currency": "EUR",
    "installable": True,
    "auto_install": False,
    "application": False,
}

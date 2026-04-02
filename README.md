# Solar Estimator Embed — Odoo Module

An Odoo 17 website module that adds a drag-and-drop solar panel calculator widget to the Odoo Website Builder.

## Installation

### From ZIP

1. Download or clone this repository
2. Copy the `solar_estimator_embed` folder into your Odoo `addons` directory
3. Restart the Odoo server
4. Go to **Apps** > **Update Apps List**
5. Search for "Solar Estimator" and click **Install**

### From Odoo Apps Store

Search for "Solar Estimator Embed" on [apps.odoo.com](https://apps.odoo.com).

## Usage

1. Open your website in the **Website Builder** (edit mode)
2. In the snippet panel, find **Solar Estimator** under **Features**
3. Drag it onto your page
4. Click the snippet to open the options panel on the right
5. Customise theme, colours, tools, lead capture, etc.
6. **Save** and publish

## Customisation Options

| Setting | Options | Default |
|---------|---------|---------|
| Calculator Tools | Calculator, Map, or Both | Calculator Only |
| Theme | Light, Dark | Light |
| Accent Colour | Any hex colour | #f59e0b (amber) |
| Border Radius | 0–24px | 12px |
| Border Style | None, Thin, Thick | None |
| Shadow | None, Small, Medium, Large | None |
| Padding | Compact, Normal, Spacious | Normal |
| Font Size | Small, Normal, Large | Normal |
| Compass Style | Visual, Dropdown | Visual |
| Lead Capture Email | Email address | Off |
| Tracking Reference | Any string | None |
| Hide Sections | location, roof, battery, panels, advanced, setup | None |

## Lead Capture

Enter an email address in the **Lead Capture Email** option to gate calculator results behind a contact form. When a visitor submits their details, you receive an email notification with their contact info and solar estimate.

## Supported Countries

The calculator supports: United States, United Kingdom, Australia, Canada, New Zealand, Ireland, and Spain.

## Technical Details

- **Odoo version**: 17.0
- **Dependencies**: `website`
- **License**: LGPL-3
- **Calculator**: Powered by [Solar-Estimator.io](https://www.solar-estimator.io)
- **Embed method**: iframe with postMessage auto-resize

## File Structure

```
solar_estimator_embed/
├── __init__.py
├── __manifest__.py
├── controllers/
│   └── __init__.py
├── views/
│   └── snippets.xml          # Snippet template + builder options
├── static/
│   ├── description/
│   │   ├── icon.svg           # Module icon
│   │   └── index.html         # Apps store description
│   └── src/
│       ├── js/
│       │   ├── embed_frontend.js   # Frontend iframe injection
│       │   └── embed_editor.js     # Editor preview handler
│       ├── scss/
│       │   └── embed_snippet.scss  # Snippet styles
│       └── xml/
│           └── embed_options.xml   # Template placeholder
└── security/
```

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

## Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| Full solar calculator | Yes | Yes |
| Battery storage calculator | Yes | Yes |
| Interactive solar map | Yes | Yes |
| Customisable theme & colours | Yes | Yes |
| Section visibility controls | Yes | Yes |
| Tracking reference | Yes | Yes |
| **Lead capture gate** | No | **Yes** |
| **Email notifications** | No | **Yes** |

## Customisation Options

| Setting | Options | Default | Tier |
|---------|---------|---------|------|
| Calculator Tools | Calculator, Map, or Both | Calculator Only | Free |
| Theme | Light, Dark | Light | Free |
| Accent Colour | Any hex colour | #f59e0b (amber) | Free |
| Border Radius | 0–24px | 12px | Free |
| Border Style | None, Thin, Thick | None | Free |
| Shadow | None, Small, Medium, Large | None | Free |
| Padding | Compact, Normal, Spacious | Normal | Free |
| Font Size | Small, Normal, Large | Normal | Free |
| Compass Style | Visual, Dropdown | Visual | Free |
| Tracking Reference | Any string | None | Free |
| Hide Sections | location, roof, battery, panels, advanced, setup | None | Free |
| License Key | License key string | None | Pro |
| Lead Capture Email | Email address | Off | Pro |

## Lead Capture (Pro)

Lead capture requires a license key. To enable it:

1. Get a license key from [solar-estimator.io/embed/customize](https://www.solar-estimator.io/embed/customize)
2. Enter the key in the **License Key (Pro)** snippet option
3. Enter your email in the **Lead Capture Email (Pro)** option
4. Save and publish

When a visitor submits their details, you receive an email with their contact info and full solar estimate (system size, cost, savings, payback).

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

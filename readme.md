# Icehouse Tailgating Website Project

## Overview

Icehouse Tailgating is a separate brand and website from Crescent Moon Vans.

Priority:

Secondary project.

The primary goal is to migrate and modernize the existing Icehouse website within the custom codebase.

---

# Relationship to Crescent Moon Vans

Icehouse Tailgating should remain:

* Independent website
* Independent branding
* Separate domain

Cross-linking strategy to be determined.

Potential options:

* Footer links
* Sister brand section
* Brand switcher

---

# Initial Scope

Current direction:

Replicate existing Icehouse site functionality and content within the new development framework.

Primary goals:

* Preserve existing branding
* Improve performance
* Improve maintainability
* Modernize implementation

---

# Site Structure

Initial recommendation:

## Home

* Hero section
* Product overview
* Gallery
* Contact CTA

## Products / Offerings

* Tailgating trailers
* Custom options
* Product highlights

## Gallery

* Project photos
* Event photos
* Product showcases

## Contact

* Inquiry form
* Consultation request

---

# Design Direction

Maintain existing Icehouse visual identity.

Reference:

Current Icehouse website

Goals:

* Clean
* Fast
* Mobile-friendly
* Easy to update

---

# Contact / Lead Generation

Primary conversion:

Inquiry submissions.

Recommended:

* Contact form
* Lead qualification form
* Consultation scheduling

---

# Deliverables

Initial Mockups:

1. Homepage
2. Product / Gallery Page

Assets Needed:

* Logos
* Brand colors
* Existing site content
* Photography
* Contact workflows

---

# Future Considerations

Potential integration with Crescent Moon Vans ecosystem:

* Cross-brand referrals
* Shared lead management
* Shared hosting / infrastructure
* Shared analytics

---

# Firebase Hosting

This site is configured to deploy as a static Firebase Hosting site directly from the repository root.

Setup:

1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Log in: `firebase login`
3. Attach the repo to a Firebase project: `firebase use --add`
4. Deploy Hosting: `firebase deploy --only hosting`

Notes:

* Hosting serves the repository root as the public directory.
* Markdown files and dotfiles are excluded from deploys.
* Static assets receive long cache headers; CSS and JS receive short cache headers.

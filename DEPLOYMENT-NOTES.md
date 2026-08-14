# HammerFlowAI August 14, 2026 Update

This package is a production-ready derivative of Prakash's `HF_website_Aug14_2026.zip` export. It preserves the supplied design and Calendly buttons while restoring the production form integrations and correcting broken local links.

## Form mapping

| Website form | Production endpoint | Submitted fields | Success page |
| --- | --- | --- | --- |
| 5 blueprints | `https://n8n.hammerflowai.com/webhook/hammerflow/blueprints/request` | `nameFirst`, `nameLast`, `Company Name`, `email1`, `gdpr`, `source` | `5-msp-automation-blueprints.html` |
| Catalog | `https://n8n.hammerflowai.com/webhook/hammerflow/catalog/request` | `nameFirst`, `nameLast`, `Company Name`, `email1`, `gdpr`, `source` | `Catalog-landing-page.html` |
| Partner | `https://n8n.hammerflowai.com/webhook/hammerflow/partners/request` | `email`, `gdpr`, `source` | `Partnership-landing-page.html` |

The browser integration is contained in `assets/hammerflow-forms.js`. It submits JSON, displays n8n validation errors, disables repeat submissions while waiting, and redirects only after a successful response.

## Versioned downloads

- Blueprint package: `downloads/hammerflow-5-msp-automation-blueprints-2026-08-14.zip`
- 34-workflow catalog: `downloads/hammer-flow-msp-automation-catalog-34-workflows-2026-08-14.pdf`

Update the production n8n email nodes to use these exact URLs:

- `https://www.hammerflowai.com/downloads/hammerflow-5-msp-automation-blueprints-2026-08-14.zip`
- `https://www.hammerflowai.com/downloads/hammer-flow-msp-automation-catalog-34-workflows-2026-08-14.pdf`

Using versioned filenames prevents the previous stale-download cache problem.

## Catalog email investigation

Prakash received the blueprint and partner emails but not the catalog email. Before changing the catalog n8n workflow, inspect the production execution for his submission in workflow `HFWebCatalogV010`.

Check, in order:

1. Confirm the catalog webhook execution exists.
2. Confirm the payload contains `nameFirst`, `nameLast`, `Company Name`, `email1`, and `gdpr`.
3. Confirm validation followed the valid branch.
4. Inspect the catalog email-provider node response.
5. Confirm the provider accepted the intended recipient address.
6. Check spam/junk and the provider delivery log.
7. Update the catalog PDF URL to the versioned URL above.
8. Save and publish only after a controlled valid and invalid test.

Do not modify the working blueprint or partner logic unless their execution evidence identifies a problem.

## Legal links

- `terms.html` reproduces the Free Blueprint License Terms supplied in the implementation guide.
- All form consent links open `terms.html` and `Privacy-Policy.html` in a new tab.
- Cookie and footer privacy links point to the supplied privacy page.

## Calendly links preserved

- MSP automation audit / Quick-Win Sprint
- 30-minute custom automation meeting
- 15-minute partner alignment session
- 15-minute standard retainer
- 15-minute growth retainer

## Local verification

Serve the folder through HTTP rather than opening `index.html` with `file://`:

```bash
cd hammerflowai-aug14-production-ready
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Do not use real production email addresses during local form-layout testing. Final form tests should be controlled after the package is merged and before live publication.

## Verified package state

- No missing local HTML asset references.
- No Mobirise form actions remain.
- All three permanent webhook endpoints occur exactly once.
- JavaScript syntax check passes.
- Catalog contains HF-001 through HF-034 with no missing IDs.
- Catalog PDF: 21 pages.
- Implementation guide: 20 pages.
- All five blueprint JSON workflows parse successfully, are inactive, and contain no pin data.
- Blueprint ZIP contains no `__MACOSX` or AppleDouble metadata.

## SHA-256

- Catalog PDF: `21fcf7f9582de641254622338e5bc92e7f9e381596ac5bf8c2620d55555bb96e`
- Blueprint ZIP: `42cd9df4bb65e2924694976a78d466461548d1df26037656ae697c86465d3be3`

Do not deploy the `project.mobirise` file to the public web root. It is included only as Prakash's editable Mobirise source. Re-exporting it from Mobirise can overwrite the custom production form integration in `index.html`.

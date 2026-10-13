# Service artwork

Add the five photos to this folder, using these filenames:

1. `revenue-sales-systems.png` — Revenue & Sales Systems
2. `brand-creative-solutions.png` — Brand & Creative Solutions
3. `seo-organic-growth.png` — SEO & Organic Growth
4. `custom-web-software.png` — Custom Web & Software Solutions
5. `ai-workflow-automation.png` — AI & Workflow Automation

Keep one image per service. The supplied PNGs already contain the photo-filled
numbers, and the page displays that artwork directly without a text mask or
placeholder numbers.

The source files are unchanged. `SERVICE_IMAGE_BOUNDS` in
`src/components/sections/ServicesPageList.tsx` records the visible artwork's
bounds within each 800×800 transparent canvas. The page crops the transparent
margin in CSS and preserves the artwork's proportions. If you replace these
files with artwork on a different canvas, update those bounds to match.

Restart the dev server if newly added files do not appear immediately; rebuild
for production after changing images. The homepage service list is separate.

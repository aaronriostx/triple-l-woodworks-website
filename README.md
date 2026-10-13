# Triple L Woodworks

A custom cabinetry portfolio made with HTML and CSS. No installation or build step is required. A small JavaScript file handles the optional light/dark toggle.

## Preview
Open `index.html` in your browser. Use the navigation to visit About Me, FAQ, and Contact.

## Company logo
Your original logo is included at `assets/triple-l-logo.png` and appears in the header and footer on all three pages. CSS preserves its proportions and blends the white background with the cream page background. Upload the `assets` folder along with the HTML and CSS files.

## Light and dark mode
The header toggle switches between light and dark themes. The first visit follows the device setting; a manual selection is remembered in the browser and shared across pages when hosted. Storage restrictions may prevent saving the choice. The site remains readable with JavaScript disabled and follows the device theme. The monochrome logo is displayed in a light color in dark mode without changing the original image.

## Animations
Navigation links have animated underlines, buttons lift on hover and press on click, project images gently lift, and page headings ease into view. Supported browsers fade between pages when the site is served over HTTP or HTTPS; other browsers use normal navigation. Visitors who prefer reduced motion receive a still experience. No JavaScript is required.

## Personalize before publishing
- Review the general answers in `faq.html`. Add your actual service area, scheduling details, and business policies as appropriate.
- Replace the story placeholders in `about.html` with your name, woodworking background, and approach. Add a portrait or workshop photo using the example in the HTML comment.
- Replace the three photo placeholders in `index.html` with your project photos. An example image tag is included in an HTML comment. Save photos in `assets/`.
- Update each project title and description. Copy an entire `<article class="project">…</article>` to add more projects.
- Remove the “Portfolio coming soon” paragraph when your projects are ready.
- Add your real email, phone number, and service area in `contact.html`. Examples for clickable email and phone links are included in a comment. The starter does not have a working inquiry form.
- Change colors in the first line of `styles.css` if desired.
- Use only photos you have permission to publish; avoid exposing clients’ private details.

## Publish on GitHub Pages
1. Sign in to GitHub and create a public repository named `YOUR-USERNAME.github.io`, replacing YOUR-USERNAME with your GitHub username. If that repository already exists, use it without overwriting existing work.
2. In the repository, choose **Add file → Upload files**. Upload `index.html`, `about.html`, `faq.html`, `contact.html`, `styles.css`, `theme.js`, `.nojekyll`, and your `assets` folder. The HTML files must be at the top level of the repository, not inside another folder. GitHub does not retain empty folders, so upload assets when you add photos.
3. Commit the uploaded files to the `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, then click **Save**.
5. Wait for deployment to finish. Pages settings will show the live website address, normally `https://YOUR-USERNAME.github.io/`.

For an existing repository with another name, the address is normally `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. The relative links used here work in either case.

After launch, edits committed to your publishing branch update the site automatically.

Official instructions:
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

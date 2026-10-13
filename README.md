# Triple L Woodworks

A custom cabinetry portfolio made with HTML and CSS. No installation or build step is required. A small JavaScript file handles the optional light/dark toggle.

## Pages
- `index.html` — home page: featured project cards, the “Inside the shop” section, and a contact strip.
- `project-01.html`, `project-02.html`, `project-03.html` — one detail page per featured project, opened by clicking its card.
- `shop.html` — the workshop page (“Workshop” in the navigation).
- `about.html`, `faq.html`, `contact.html`.

## Preview
Open `index.html` in your browser. Use the navigation to visit Workshop, About, FAQ, and Contact.

## Company logo
Your original logo is included at `assets/triple-l-logo.png` and appears in the header and footer on every page. CSS preserves its proportions and blends the white background with the cream page background. Upload the `assets` folder along with the HTML and CSS files.

## Light and dark mode
The header toggle switches between light and dark themes. The first visit follows the device setting; a manual selection is remembered in the browser and shared across pages when hosted. Storage restrictions may prevent saving the choice. The site remains readable with JavaScript disabled and follows the device theme. The monochrome logo is displayed in a light color in dark mode without changing the original image.

## Animations
Navigation links have animated underlines, buttons lift on hover and press on click, project images gently lift, and page headings ease into view. Supported browsers fade between pages when the site is served over HTTP or HTTPS; other browsers use normal navigation. Visitors who prefer reduced motion receive a still experience. No JavaScript is required.

## Photos
- Save photos in `assets/`, with one folder per project (`assets/project-01/`, `assets/project-02/`, …) and `assets/shop/` for the workshop.
- Resize photos before adding them: about 1600 pixels wide, saved as JPEG, is plenty for the web. Phone originals are several times larger than needed, slow the site down, and bloat the repository. Keep the originals somewhere else.
- Check that photos do not carry location data, and use only photos you have permission to publish; avoid exposing clients’ private details.
- Every image needs a short `alt` description of what it shows, plus `width` and `height` set to the file’s real pixel size.
- Videos should not go in this repository. Upload them to YouTube and embed them instead.

## What is done and what is still placeholder
Done:
- The About page photo, and the main photos for projects 1 and 2 (home page cards and their detail pages).
- The contact email, Instagram link, and service areas in `contact.html`.

Still to fill in:
- `about.html`: replace the story placeholders with your name, woodworking background, and approach.
- `index.html`: update each project card’s title and description, add the project 3 photo, and replace the placeholder sentence and photo in the “Inside the shop” section. Remove the “Portfolio coming soon” paragraph when your projects are ready.
- `project-01.html`, `project-02.html`, `project-03.html`: fill in the project name, story, at-a-glance facts, and gallery photos. Example image tags are in the HTML comments. Project 3 also needs its main photo.
- `shop.html`: fill in the workshop details and photos.
- `faq.html`: review the general answers and add your scheduling details and business policies as appropriate.
- `contact.html`: the email is plain text and there is no phone number. Examples for clickable email and phone links are in a comment. There is no inquiry form.

## Making common changes
- **Add a project:** copy an entire `<article class="project">…</article>` card in `index.html`, copy one of the `project-NN.html` files under a new number, and point the new card’s link at the new file.
- **Main photo shape on a project page:** a wide photo uses the full-width slot shown in `project-03.html`; a portrait photo sits beside the story as in `project-01.html` and `project-02.html`.
- **Navigation, header, or footer:** these are repeated in every HTML file, so make the same edit in all of them.
- **Instagram:** the link (`_lll_woodworks_`) appears in the top navigation (the icon after Contact) and footer of every HTML file, and in the Instagram row in `contact.html`. If the username changes, update it in all of those places.
- **Colors:** change them in the first line of `styles.css`, and in the theme color sections further down for dark mode.

## Publish on GitHub Pages
1. Sign in to GitHub and create a public repository named `YOUR-USERNAME.github.io`, replacing YOUR-USERNAME with your GitHub username. If that repository already exists, use it without overwriting existing work.
2. In the repository, choose **Add file → Upload files**. Upload `index.html`, `about.html`, `faq.html`, `contact.html`, the `project-NN.html` pages, `shop.html`, `styles.css`, `theme.js`, `.nojekyll`, and your `assets` folder. The HTML files must be at the top level of the repository, not inside another folder. GitHub does not retain empty folders, so upload assets when you add photos.
3. Commit the uploaded files to the `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, then click **Save**.
5. Wait for deployment to finish. Pages settings will show the live website address, normally `https://YOUR-USERNAME.github.io/`.

For an existing repository with another name, the address is normally `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. The relative links used here work in either case.

After launch, edits committed to your publishing branch update the site automatically.

Official instructions:
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

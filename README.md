# Emyr Fauzan Portfolio

A responsive personal portfolio website created for an individual UI/UX web development assignment. The website introduces me, presents my experience and projects, lists the technologies I use, and provides ways to contact me.

## Links

- Live website: [careerportofio.netlify.app](https://careerportofio.netlify.app)
- GitHub repository: [github.com/Emir-A/Personal-Website](https://github.com/Emir-A/Personal-Website)

## Website Purpose

This portfolio provides a clear overview of my background as an Information Technology student with interests in backend development and cybersecurity. It is designed to help lecturers, classmates, recruiters, and collaborators quickly understand my skills, experience, and projects.

## Target Users

- Lecturers reviewing the UI/UX assignment
- Recruiters and potential collaborators
- Other students and technology communities

## Main Features

- Introduction and profile section
- Experience and education timeline
- Project showcase with technology labels and repository links
- Technology stack grouped by category
- Contact and social links
- Light and dark theme support
- Responsive navigation for desktop, tablet, and mobile
- Blog section for future technical write-ups

## UI/UX Decisions

- **Consistent design:** Repeated colors, spacing, typography, cards, and interaction styles create a cohesive interface.
- **Clear navigation:** A fixed navigation bar provides direct access to each main section.
- **Visual hierarchy:** Headings, accent colors, spacing, and card layouts help users scan information quickly.
- **Responsive layout:** Tailwind CSS breakpoints adapt navigation, typography, grids, and spacing to different screen sizes.
- **Feedback and affordance:** Hover states, active navigation states, animations, and the theme toggle communicate available interactions.
- **Readable typography:** Inter and Space Grotesk provide clear body text and distinct headings.

## Technology Stack

- [Astro](https://astro.build/) for static site generation and component structure
- [Tailwind CSS](https://tailwindcss.com/) for responsive styling
- [Astro Icon](https://www.astroicon.dev/) and Iconify for icons
- TypeScript and JavaScript for interactive behavior
- Netlify for deployment

## Project Screenshots

Project cards currently use:

```text
src/assets/project-screenshot-placeholder.svg
```

To add real screenshots:

1. Place the screenshot files in `src/assets/`.
2. Open `src/data/projects.json`.
3. Replace `project-screenshot-placeholder.svg` with the screenshot filename.

Example:

```json
"images": ["almond-tracker-home.png", "almond-tracker-history.png"]
```

Multiple images are displayed as an automatic slideshow.

## Running Locally

Requirements:

- Node.js 22.12.0 or newer
- npm

```bash
git clone https://github.com/Emir-A/Personal-Website.git
cd Personal-Website
npm install
npm run dev
```

The development server is available at `http://localhost:4321`.

## Quality Checks

```bash
npm run build
npm run astro -- check
```

## Project Structure

```text
public/                 Static public files
src/
  assets/               Profile and project images
  components/           Reusable Astro components
  content/blog/         Blog posts
  data/                 Portfolio content in JSON files
  layouts/              Shared page layout
  pages/                Website routes
  styles/               Global styles and themes
```

## Customizing Content

Most portfolio content can be updated without editing component markup:

- `src/data/home.json`: profile details and social links
- `src/data/career.json`: experience and education
- `src/data/projects.json`: projects and screenshots
- `src/data/tech.json`: technologies and skill levels
- `src/config.ts`: active color theme

## Deployment

The website is deployed on Netlify and configured as a static Astro site. A production build is generated with:

```bash
npm run build
```

The generated website is written to the `dist/` directory.

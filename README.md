# [henrikvt.com](https://henrikvt.com) Website Project
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Folders & Branches
Index for all the the permanent branches in this project and their folders.
### `main` branch
- `pages`: This directory holds the pages for the website. These pages are written in JavaScript.
- `styles`: Stylesheets for the website pages and components.
- `components`: Hold the components for the site; ie: `header.js` and `footer.js`
- `public`: Media files live here. Images and such.
- `lib`: Not quite sure what this is called, but it holds `js` files for stuff like the Firebase config.
- `ci-cd`: `yaml` files that describe the cloudbuild routines for this project.

### `functions` branch
- `functions`: functions directly lol
- `functions/firebase-src`: firebase functions - these functions operate async to the website.
- `functions/netlifylambda-src`: *This Directory Does Not Exist Yet.* Functions that operate in response to events from the website. Form handlers, etc.

## Project Conventions
This section describes the standards in this repository.
### File extensions
- `.js` is used for anything that is vanilla JavaScript
- `.jsx` is used for anything that is a React component or generates a viewable page.
# Testing Nanostores persistent

Description:
Nanostores persistent storage breaks with bfcache (using browser back button).
Project using Astro Framework (SSR), Vue 3 and Nanostores + Nanostores persistent and deploying to Netlify.

## Installation

1. Clone project
2. Run `npm i`
3. Install Netlify, follow instructions here [https://docs.astro.build/en/guides/deploy/netlify/](Astro Framework Netlify instructions)
4. Replace `yoursitehere` line 9 in package.json with your site name `site: "https://yoursitehere.netlify.app/",`
5. Build and deploy to Netlify `netlify deploy --build --prod`
6. Your netlify site will be ready to test...

# Steps to Reproduce error:

- Go to route `/setuser` and enter something into the input field
- Use the browsers `back` button to return to the previous page and confirm that the input value you entered hasn't been updated from localStorage.
- If you open developer tools, you'll see that the value of localStorage has been correctly logged via JavaScript and inside localStorage you'll find the correct value as well, but the Vue component still shows the old value from localStorage.

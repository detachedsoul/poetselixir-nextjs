# Poet's Elixir Using Nextjs

This is a reproduction of [PoetsElixr](https://detachedsoul.github.io/poetselxiir) made with Nextjs. You can check out the repo to that work using [this link](https://github.com/detachedsoul/poetselixir). I'll keep updating this README as I continue working on it.

## Stages

- Made my first commit which was the design of the homepage and deployed it on Netlify.

- Designed the admin page and also carried out minor code changes here and there.

- Preloaded the fonts to improve user experience.

- Made the contact page

- Made the account page, changed from using ordinary functions for things like toggling the navbar to using the `useState` react hook, and also tweaked the UI (changed things things like background colors and made things a little consistent)

- Made the categories dropdown. This required that I keep track of which links were to have dropdowns (this was achieved by adding an `isDropdown` property in the links objects). Then I had to look for a way to prevent the default tag action, toggle the dropdown, and then for links that didn't have dropdown still keep the same functionality of closing the the navigation container on smaller devices and also apply the `active` class to the current route (current page).

The live demo of my progress can be found on [https://poetselixir.netlify.app](https://poetselixir.netlify.app)

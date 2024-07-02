# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Best Practices for Event Listeners and Accessibility in Forms

### Using Passive Event Listeners for Performance

Passive event listeners are an important tool for improving the performance of web pages, especially those with scrolling and touch or pointer events. Marking an event listener as passive suggests to the browser that the event listener does not call `preventDefault()`, allowing the browser to continue processing scrolling or other default actions without waiting for the JavaScript to execute.

To use passive event listeners in Svelte, you can modify the event listener syntax by appending `|passive`, like so:

```svelte
<button on:click|passive={handleClick}>Click Me</button>
```

This tells the browser that the `handleClick` function will not call `preventDefault()`, and the browser can safely perform optimizations.

### Ensuring Forms Have Username Fields for Accessibility

For better accessibility, especially in password forms, it's recommended to include a username field. This can be visibly hidden if not needed for the form's design but should be present in the HTML for accessibility tools. In Svelte, you can implement a hidden username field like this:

```svelte
<input type="hidden" name="username" aria-hidden="true">
```

This ensures that password managers and accessibility tools can correctly associate the form with a user account, improving the experience for users relying on these tools.

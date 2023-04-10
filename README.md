# Capture Svelte Example

This project is a simple demo of how to CRUD session and capture image using the Web APIs MediaDevices in a Svelte application.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

-   `home`: a [svelte-kit](https://kit.svelte.dev/) app
-   `camera`: another [svelte-kit](https://kit.svelte.dev/) app
-   `workshop`: used to show Storybook for all component in `packages/ui`
-   `ui`: a stub Svelte component library shared by both `web` and `docs` applications
-   `http-client`: a container used to calling remote API
-   `shared-utils`: a shared utils between apps
-   `config`: `postcss` and `tailwind` configurations
-   `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

## How to use

### Required CLI:

-   pnpm@7.15.0 (you should install globally on your machine)
-   turbo CLI (you should install globally on your machine)

Run the following command:

```sh
pnpm install
turbo dev
```

This will start a local development server at http://localhost:3000 and http://localhost:3001 where you can view the app and make changes.

To run specific workspace:

```sh
turbo dev --filter={{workspace_name}}
```

## Project Structure

The project is structured as follows:

```bash
capture-demo-example/
├── apps/
│ ├── camera
│ └── home
│ └── workshop
├── packages/
│ ├── config
│ ├── eslint-config-custom
│ ├── ui/
│ │ ├── components
│ │ │ ├── Button.svelte
│ │ ├── pages
│ │ └── ...
│ └── shared-utils
│ └── http-client
├── package.json
├── turbo.json
└── ...
```

### Workspaces

Follow [this instruction](https://turbo.build/repo/docs/handbook/workspaces) if you need to add another app or package

## Authors

-   Thanh Pham

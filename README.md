# Capture Demo Example

This project is a simple demo of how to CRUD session and capture image using the Web APIs MediaDevices in a Svelte application.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `home`: a [svelte-kit](https://kit.svelte.dev/) app
- `camera`: another [svelte-kit](https://kit.svelte.dev/) app
- `ui`: a stub Svelte component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)
- `shared-utils`: a shared utils between apps

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## How to use

### Required CLI:

pnpm@7.15.0 (you should install globally on your machine)
turbo CLI (you should install globally on your machine)

Run the following command:

```sh
pnpm install
turbo dev
```

This will start a local development server at http://localhost:3000 and http://localhost:3001 where you can view the app and make changes.

Run specific workspace:

```sh
turbo dev --filter={{workspace_name}}
```

## Project Structure

The project is structured as follows:

capture-demo-example/
├── apps/
│ ├── camera
│ └── home
├── packages/
│ ├── eslint-config-custom
│ ├── ui/
│ │ ├── Button.svelte
│ │ └── ...
│ └── shared-utils
├── package.json
├── turbo.json
└── ...

## Authors

- Thanh Pham

## Acknowledgments

- This project was created as a demo for TurboRepo.
- Feel free to customize this README to fit your specific project needs. Good luck with your Svelte project!

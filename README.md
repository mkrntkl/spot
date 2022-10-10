# Spot

The one recipe portal for all your needs (or something along those lines). Born out of the frustration of being unable to decide what to make for dinner. Fret not, Spot will decide for you! [Deployed to fly.io](https://spot.fly.dev/).

## The stack

- Created using [remix.run](https://remix.run), a React based (optionally full stack) web framework.
- [TypeScript](https://typescriptlang.org) for the types.
- [Prisma](https://prisma.io) for database development.
- [PostgreSQL](https://www.postgresql.org/docs/) as the database of choice
- [Tailwind](https://tailwindcss.com/) for styling.
- [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com) for unit testing.
- [Cypress](https://cypress.io) for end-to-end testing.
- [Github Actions](https://cypress.io) for continuous integration and deployment.

## Development

Start the dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

### Testing

Run `npm run validate` to run linting, typechecking and all unit and end-to-end tests.

### Formatting

[Prettier](https://prettier.io/) is used for auto-formatting.

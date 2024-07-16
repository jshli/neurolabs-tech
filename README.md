This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies and then run the development server:

```bash
npm install
npm run dev

```

## Testing

This project uses Storybook combined with MSW for visual/smoke and unit testing. To run Storybook:

```
npm run storybook
```

To run both unit and smoke tests, ensure a Storybook server is running, and then run:

```
npm run test-storybook
npm run test
```

### Motivation for Storybook

Storybook + MSW + React Testing Library + an OpenAPI schema is a great way to build components in isolation, providing a demo playground for non-technical users while also offering a powerful testing suite. This approach is especially effective when combined with Chromatic (not implemented yet).>Storybook + MSW + React Testing Library + an OpenAPI schema is a great way to build components in isolation, providing a demo playground for non-technical users, while also providing a powerful testing suite, especially when combined with Chromatic (not implemented).

The goals are to:
- Use Storybook itself for smoke testing (removing the need for 'Did this render?' tests)
- Use Storybook + MSW to build components in isolation, using imported OpenAPI schemas to ensure type safety.
- Use Storybook + React Testing Library for integration/unit testing. By importing and rendering the Story itself, this reduces duplication in writing the unit tests. We can also use the Story 'play' function to mimic user interaction, allowing the engineer to see the component in action in Storybook, while also doubling up as an automated integration test.

A future improvement would be to integrate Chromatic, which would add UI snapshot testing, detecting any visual regressions.

## Other technologies used

- Material UI for quick component development. I'm usually not a huge fan of pre-made component libraries as they're often heavy, unwiedly libraries, but employing one in this PoC made sense to take the burden off styling components
- TailwindCSS for style utilities
- react-hook-form for form utilities. Reduces the boilerplate for creating forms
- react-query for handling network requests/a quasi state management
- openapi-typescript, to pull types from the OpenAPI schema.

## What next

- Form validation
- Better organisation of types/mocks

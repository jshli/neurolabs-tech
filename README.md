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

The goal is to:

- Use Storybook + MSW to build components in isolation, while using imported OpenAPI schemas to ensure type safety
- Use Storybook + React Testing Library for integration/unit testing. By importing and rendering the Story itself, this reduces duplication in writing the unit tests itself. We can also use the Story 'play' function to mimic user interaction, which allows the engineer to see the component in action in Storybook, while also doubling up as an automated integration test.

A future improvement would be to integrate Chromatic, which would as UI snapshot testing, picking up any visual regressions.

## Other technologies used

- Material UI for quick component development. I'm usually not a huge fan of pre-made component libraries as they're often heavy, unwiedly libraries, but employing one in this PoC made sense to take the burden off styling components
- TailwindCSS for style utilities
- react-hook-form for form utilities. Reduces the boilerplate for creating forms
- react-query for handling network requests/a quasi state management
- openapi-typescript, to pull types from the OpenAPI schema.

## What next

- Tests. While using Storybook + MSW may have been 'overkill' for a small PoC, I wanted to demonstrate my favourite approach to front-end testing. I ran into some integration issues that unfortunately was taking too long to resolve, so my unit tests aren't nearly as thorough as I'd like them to be. However, I hope they serve as a good demonstration of the approach, and I'd love the opportunity to walk more through the approach in person
- Form validation
- Better organisation of types/mocks

import { render, screen } from "@testing-library/react";

import { composeStory } from "@storybook/react";

import Meta, { Default as DefaultCatalogueItem } from "./CatalogueItem.stories";
const Default = composeStory(DefaultCatalogueItem, Meta);

test("renders the correct data", async () => {
  render(<Default />);
  expect(screen.getByText("Nutella")).toBeVisible();
  expect(screen.getByText("Ready")).toBeVisible();
});

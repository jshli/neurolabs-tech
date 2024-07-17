import { render, screen } from "@testing-library/react";

import { composeStory } from "@storybook/react";

import Meta, { Default as DefaultCatalogueItem } from "./CatalogueItem.stories";
const Default = composeStory(DefaultCatalogueItem, Meta);

describe("Catalogue Item", () => {
  beforeEach(() => {
    render(<Default />);
  });
  it("renders the Catalogue Item name", () => {
    expect(screen.getByText("Nutella")).toBeVisible();
  });
  it("renders the status", () => {
    expect(screen.getByText("Ready")).toBeVisible();
  });
});

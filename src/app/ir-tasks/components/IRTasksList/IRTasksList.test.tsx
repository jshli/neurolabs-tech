import { render, screen, waitFor } from "@testing-library/react";

import { composeStory } from "@storybook/react";

import Meta, { Default } from "./IRTasksList.stories";
const IRTasksList = composeStory(Default, Meta);

test.skip("renders the correct data", async () => {
  await IRTasksList.load();
  render(<IRTasksList />);
  await waitFor(() => {
    expect(screen.getByText("Task Title 1")).toBeInTheDocument();
    screen.debug();
  });
});

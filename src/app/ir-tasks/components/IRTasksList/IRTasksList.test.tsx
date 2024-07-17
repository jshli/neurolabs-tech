import { render, screen, waitFor } from "@testing-library/react";

import { composeStory } from "@storybook/react";

import Meta, { Default } from "./IRTasksList.stories";
import { server } from "@/mocks/node";
const IRTasksList = composeStory(Default, Meta);

server.listen();

describe("Image Recognition Tasks list", () => {
  beforeEach(async () => {
    await IRTasksList.load();
    render(<IRTasksList />);
  });

  it("shows the IR Task title", async () => {
    expect(screen.getByText("Loading...")).toBeVisible();
    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Task Title 1" })).toBeVisible();
    });
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { composeStory } from "@storybook/react";

import Meta, { Default } from "./SubmitImageForm.stories";
import { server } from "@/mocks/node";
const SubmitImageForm = composeStory(Default, Meta);

server.listen();

test("the button is disabled if no images picked", async () => {
  await SubmitImageForm.load();
  render(<SubmitImageForm />);
  expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
});

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { composeStory } from "@storybook/react";

import Meta, { Default } from "./SubmitImageForm.stories";
import { server } from "@/mocks/node";
const SubmitImageForm = composeStory(Default, Meta);

server.listen();
const fetchSpy = jest.spyOn(global, "fetch");

test("the button is disabled if no images picked", async () => {
  await SubmitImageForm.load();
  render(<SubmitImageForm />);
  expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
});

test("it fires the post request if file uploaded", async () => {
  userEvent.setup();
  global.URL.createObjectURL = jest.fn();

  const file = new File(["hello"], "hello.png", { type: "image/png" });

  await SubmitImageForm.load();
  render(<SubmitImageForm />);
  await userEvent.upload(
    screen.getByLabelText("Upload a new image to process"),
    file,
  );
  userEvent.click(screen.getByRole("button", { name: "Submit" }));
  waitFor(() => expect(fetchSpy).toHaveBeenCalled());
});

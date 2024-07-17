import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { composeStory } from "@storybook/react";

import Meta, { Default } from "./SubmitImageForm.stories";
import { server } from "@/mocks/node";
const SubmitImageForm = composeStory(Default, Meta);

server.listen();
const fetchSpy = jest.spyOn(global, "fetch");
userEvent.setup();
global.URL.createObjectURL = jest.fn();

describe("Submit image form", () => {
  beforeEach(async () => {
    await SubmitImageForm.load();
    render(<SubmitImageForm />);
  });

  it("disables the buttons when there's no files selected", async () => {
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it(" fires the post request if file uploaded", async () => {
    const file = new File(["hello"], "hello.png", { type: "image/png" });

    await userEvent.upload(
      screen.getByLabelText("Upload a new image to process"),
      file,
    );
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    waitFor(() => expect(fetchSpy).toHaveBeenCalled());
  });
});

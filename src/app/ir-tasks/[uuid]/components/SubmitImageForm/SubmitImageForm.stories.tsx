import type { Meta, StoryObj } from "@storybook/react";
import { SubmitImageForm } from "./SubmitImageForm";
import Providers from "@/app/providers";
import { handlers } from "@/mocks/handlers";

const meta: Meta<typeof SubmitImageForm> = {
  title: "Submit Image Form",
  component: SubmitImageForm,
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SubmitImageForm>;

export const Default: Story = {
  parameters: {
    msw: {
      ...handlers,
    },
  },
  args: {
    taskUUID: "123abc",
  },
};

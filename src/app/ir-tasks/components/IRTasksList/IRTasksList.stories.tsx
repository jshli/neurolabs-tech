import type { Meta, StoryObj } from "@storybook/react";
import { IRTasksList } from "./IRTasksList";
import { http, HttpResponse } from "msw";
import Providers from "@/app/providers";
import { handlers } from "@/mocks/handlers";

const meta: Meta<typeof IRTasksList> = {
  title: "Image Recognition Task List",
  component: IRTasksList,
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IRTasksList>;

export const Default: Story = {
  parameters: {
    msw: {
      ...handlers,
    },
  },
};

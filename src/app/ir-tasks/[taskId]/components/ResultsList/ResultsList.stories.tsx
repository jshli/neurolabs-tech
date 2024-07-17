import type { Meta, StoryObj } from "@storybook/react";
import { ResultsList } from "./ResultsList";
import { http, HttpResponse } from "msw";
import Providers from "@/app/providers";
import { handlers } from "@/mocks/handlers";

const meta: Meta<typeof ResultsList> = {
  title: "Results List",
  component: ResultsList,
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ResultsList>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    msw: {
      ...handlers,
    },
  },
};

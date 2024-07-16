import type { Meta, StoryObj } from "@storybook/react";
import { IRTasksList } from "./IRTasksList";
import { http, HttpResponse } from "msw";
import Providers from "@/app/providers";

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
      handlers: [
        http.get("/api/image-recognition/tasks", () => {
          return HttpResponse.json({
            items: [
              {
                uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                name: "Task Title 1",
                created_at: "2024-07-16T12:20:48.780Z",
                updated_at: "2024-07-16T12:20:48.780Z",
                compute_realogram: true,
                compute_shares: true,
              },
            ],
            total: 0,
            limit: 0,
            offset: 0,
          });
        }),
      ],
    },
  },
};

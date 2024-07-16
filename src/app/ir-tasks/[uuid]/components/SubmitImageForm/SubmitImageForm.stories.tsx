import type { Meta, StoryObj } from "@storybook/react";
import { SubmitImageForm } from "./SubmitImageForm";
import { http, HttpResponse } from "msw";
import Providers from "@/app/providers";

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
      handlers: [
        http.post(`/api/image-recognition/tasks/:taskUUID/images`, () => {
          return HttpResponse.json(["3fa85f64-5717-4562-b3fc-2c963f66afa6"]);
        }),
      ],
    },
  },
  args: {
    taskUUID: "123abc",
  },
};

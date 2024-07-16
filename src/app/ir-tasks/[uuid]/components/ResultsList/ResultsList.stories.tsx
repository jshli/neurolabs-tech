import type { Meta, StoryObj } from "@storybook/react";
import { ResultsList } from "./ResultsList";
import { http, HttpResponse } from "msw";
import Providers from "@/app/providers";

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
    msw: {
      handlers: [
        http.get("/api/image-recognition/tasks/:id/results", () => {
          return HttpResponse.json({
            items: [
              {
                uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                task_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                image_url:
                  "https://t4.ftcdn.net/jpg/03/40/59/61/360_F_340596198_RZ7WYwBq4LI12BfJZEE2AMOfWv0zNJOf.jpg",
                status: "PROCESSED",
                duration: 0,
                created_at: "2024-07-16T14:59:34.283Z",
                updated_at: "2024-07-16T14:59:34.283Z",
                postprocessing_results: {
                  realogram: [
                    {
                      annotation_id: 0,
                      shelf_id: 0,
                      slot: 0,
                      category_id: 0,
                    },
                  ],
                  shares: [
                    {
                      image_id: 0,
                      values: [
                        {
                          group_by: "products",
                          product_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                          count: 0,
                          count_ratio: 0,
                          area: 0,
                          area_ratio: 0,
                        },
                        {
                          group_by: "tags",
                          product_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                          count: 0,
                          count_ratio: 0,
                          area: 0,
                          area_ratio: 0,
                          tag_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        },
                      ],
                    },
                  ],
                },
                coco: {},
                confidence_score: 0,
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

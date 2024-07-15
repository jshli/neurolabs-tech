import type { Meta, StoryObj } from "@storybook/react";
import { CatalogueItem } from "./CatalogueItem";

const meta: Meta<typeof CatalogueItem> = {
  title: "Catalogue Item",
  component: CatalogueItem,
};

export default meta;
type Story = StoryObj<typeof CatalogueItem>;

export const Default: Story = {
  args: {
    item: {
      name: "Nutella",
      uuid: "123ABC",
      status: "READY",
      updated_at: new Date().toJSON(),
      created_at: new Date().toJSON(),
      thumbnail_url:
        "https://storage.googleapis.com/zia-web-public/staging/products/e701f65a-b5f4-4cf4-aba6-c02decc4ee3e/f216107f-f98c-4ad9-9bff-b5074bde4b15.png",
    },
  },
};

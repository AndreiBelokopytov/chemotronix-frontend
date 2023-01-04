import { ComponentMeta } from "@storybook/react";
import { PageLayout } from "./PageLayout";

const meta: ComponentMeta<typeof PageLayout> = {
  title: "Button",
  component: PageLayout,
};

export default meta;

export const Primary = () => (
  <PageLayout title="New React App">Default page layout</PageLayout>
);

import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import global styles
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#242424" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[100vh] p-8 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default preview;

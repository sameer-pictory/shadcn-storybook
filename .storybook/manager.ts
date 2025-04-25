import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// Use the default dark theme for Storybook UI
addons.setConfig({
  theme: themes.dark,
});

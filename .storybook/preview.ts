import { agoraTheme } from "./theme";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
      theme: agoraTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      sort: "alpha",
    },
  },
};

export default preview;

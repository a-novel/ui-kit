import { create } from "@storybook/theming/create";

export const agoraTheme = create({
  base: "dark",
  fontBase: '"Nimbus Sans"',
  fontCode: "monospace",
  brandTitle: `<img style="margin-top: 12px;" src="/brand/logo-button.png" alt="agora logo" width="auto" height="32px"/>`,
  brandUrl: "https://www.agoradesecrivains.fr",
  brandTarget: "_blank",

  colorPrimary: "#ff3232",
  colorSecondary: "#ff9300",

  appBg: "#000000",
  appContentBg: "#000000",
  appPreviewBg: "#000000",
  appBorderColor: "#424242",
  appBorderRadius: 4,
  textColor: "#ffffff",
  textInverseColor: "#000000",
  barTextColor: "#ffffff",
  barSelectedColor: "#32adff",
  barBg: "#000000",
  inputBg: "#000000",
  inputBorder: "#9e9e9e",
  inputTextColor: "#ffffff",
  inputBorderRadius: 4,
});

import localFont from "next/font/local";

/**
 * <span style="color: #32adff;">Default font for the NextJS agora UI.</soan>
 *
 * We are using the open source fonts
 * <span style="color: #ffd600;">{@link http://git.ghostscript.com/?p=urw-core35-fonts.git;a=tree available here}</span>.
 */
export const NimbusSans = localFont({
  src: [
    {
      path: "./NimbusSans-Regular.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./NimbusSans-Italic.ttf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "./NimbusSans-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./NimbusSans-BoldItalic.ttf",
      weight: "bold",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

import localFont from "@next/font/local";

const untitledSerif = localFont({
  src: [
    {
      path: "./UntitledSerif-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./UntitledSerif-Bold-Italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./UntitledSerif-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./UntitledSerif-Medium-Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./UntitledSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./UntitledSerif-Regular-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export default untitledSerif;
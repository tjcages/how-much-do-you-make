import localFont from "@next/font/local";

const untitledSans = localFont({
  src: [
    {
      path: "./UntitledSans-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./UntitledSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default untitledSans;

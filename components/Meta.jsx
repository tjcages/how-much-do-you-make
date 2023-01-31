import React, { useEffect, useState } from "react";
import Head from "next/head";

const Meta = (props) => {
  const title = props.title ?? "How Much Do You Make?";
  const description =
    props.description ??
    "An inside look at the personal finances of young professionals.";
  const image = props.image ?? "https://book.thenetworkstate.com/assets/quickstart-sectioned.png";
  const url = props.url ?? "https://howmuchdoyoumake.com";

  const [faviconHref, setFaviconHref] = useState("/favicon.ico");

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches));
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  const getFaviconPath = (isDarkMode = false) => {
    return isDarkMode ? "/favicon-dark.ico" : "/favicon.ico";
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} key="title" />
        <meta name="og:title" content={title} key="og:title" />
        <meta property="og:site_name" content={title} />
        <meta name="description" content={description} key="description" />
        <meta
          name="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:url" content={url} key="url" />
        <meta property="og:image" content={image} key="image" />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="card"
        />
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:image" content={image} key="twitter:image" />
        <meta
          property="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta
          property="twitter:creator"
          content="@capitalxyz"
          key="twitter:creator"
        />

        <link rel="icon" href={faviconHref} />
      </Head>
      {props.children}
    </>
  );
};

export default Meta;

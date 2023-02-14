/* eslint-disable react/display-name */
import { useLayoutEffect, useRef, forwardRef } from "react";
import Link from "next/link";

import styles from "../styles/tile.module.scss";

import Vectors from "../components/Vectors";

export const Tile = forwardRef(
  (
    {
      children,
      cards,
      col = 1,
      row = 1,
      perspective = false,
      dark = false,
      perspectiveDist = 400,
      captionTop,
      captionBot,
    },
    ref
  ) => {
    useLayoutEffect(() => {
      function setupTile() {
        wrapperRef.current.setAttribute(
          "style",
          `--ts: ${wrapperRef.current.getBoundingClientRect().width}px;
         grid-column: span calc(${col} * var(--gridBase));
         grid-row: span calc(${row} * var(--gridBase));
        `
        );
      }

      function handleResize() {
        setupTile();
      }
      window.addEventListener("resize", handleResize);

      setupTile();
    });

    const wrapperRef = useRef();

    return (
      <div ref={wrapperRef} className={styles.tileWrapper}>
        <div
          className={styles.view}
          ref={ref}
          style={{
            opacity: cards ? 1 : 0,
            background: dark ? "hsla(0, 0%, 13%, 1)" : "#fafafa",
            perspective: perspective ? `${perspectiveDist * 2}px` : "none",
            touchAction: "none",
          }}
        >
          <Vectors />
          {children}
        </div>
        <Link
          href="https://how-much-do-you-make.beehiiv.com/p/much-make-justin-barnett-fb8b"
          className={`${styles.caption} ${styles.bottom}`}
          style={{ opacity: cards ? 1 : 0 }}
        >
          <p>{captionBot}</p>
          <div className={styles.underline} />
        </Link>
      </div>
    );
  }
);

export const s = (number) => {
  return `calc(var(--ts) * ${number})`;
};

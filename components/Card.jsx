import Image from "next/image";
import { motion, useSpring } from "framer-motion";

import styles from "../styles/card.module.scss";

// Spring configuration
const spring = {
  type: "spring",
  damping: 70,
  stiffness: 600,
  restDelta: 0.0001,
  restSpeed: 0.0001,
};

const Card = ({ i, card, length, size, rotateArray, current }) => {
  // Card is sized relatively to the container,
  // just to maintain all ratios.

  const cardWidth = size * 0.55 * 1;
  const cardHeight = size * 0.8 * 1;

  // Bunch of helpers
  // to get the correct array slice
  const { isLeft, isFirst, isCenter, isRight } = {
    isLeft: i < length,
    isFirst: i === length,
    isCenter: i > length && i <= length * 2 - 1,
    isRight: i > length * 2 - 3 && i < length * 3,
  };

  // Another helper to start counting
  // from the "first visible" card
  const iFromFirst = i - length;

  // I usually work with hsl() model
  // bgLightness defines the l component of the background
  const bgLightness = 3;

  // I don't want any card to be darker
  // than the background itself
  const clampLightness = (value) => Math.max(value, bgLightness);

  // Helpers, helpers, helpers...
  const lightnessHSL = (value) => `hsl(0,0%,${clampLightness(value)}%)`;
  const offsetCalc = (start, step) => start * size + step * i;
  const backgroundCalc = (start, step) =>
    lightnessHSL(start + step * iFromFirst);

  // Actual styles for each card set.
  // I want to have control over:
  // – first card (the draggable one)
  // – center (visible cards)
  // – left (out of container but matters for exit animation)
  // – right (out of container but matters for initial animation)

  const styler = {
    [isLeft]: {
      posX: offsetCalc(-1.5, 0),
      posY: offsetCalc(-0.25, 1),
      posZ: offsetCalc(0, 1),
      rotX: 0,
      rotY: 45,
      rotZ: -90,
      background: backgroundCalc(95, 0),
    },
    [isFirst]: {
      posX: offsetCalc(-0.2, -cardWidth / 6 / i),
      posY: offsetCalc(-0.425, 1),
      posZ: offsetCalc(0, 1),
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      background: backgroundCalc(95, 0),
    },
    [isCenter]: {
      posX: offsetCalc(-1.05, 0.3 * cardWidth),
      posY: offsetCalc(-0.45, 2),
      posZ: offsetCalc(-0.25, -i * i * 0.65),
      rotX: i * -1,
      rotY: i * -5,
      rotZ: -35 + i * 6.5,
      background: backgroundCalc(1000, -25),
    },
    [isRight]: {
      posX: offsetCalc(1.5, 0),
      posY: offsetCalc(0.25, 0),
      posZ: offsetCalc(-0.25, -20),
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      background: backgroundCalc(0, 0),
    },
  };

  // All cards are styled based on their index:
  const { posX, posY, posZ, background, rotX, rotY, rotZ } =
    styler[isLeft || isRight || isCenter || isFirst];

  // Springs for drag animation
  const dPosX = useSpring(posX, spring);
  const dPosY = useSpring(posY, spring);
  const dPosZ = useSpring(posZ, spring);

  const dRotX = useSpring(rotX, spring);
  const dRotY = useSpring(rotY, spring);
  const dRotZ = useSpring(rotZ, spring);

  // This function controlls the drag behavior
  // and constrains verical and horizontal drag force
  const setXY = (info, consX, consY) => {
    dPosX.set(posX + (info.offset.x * size * consX) / 1000);
    dPosY.set(posY + (info.offset.y * size * consY) / 1000);
    dRotX.set(rotX + ((info.offset.y / size) * 40000 * consY) / 1000);
    dRotY.set(rotY + ((info.offset.x / size) * -120000 * consY) / 1000);
    dRotZ.set(rotZ + ((info.offset.x / size) * 120000 * consY) / 1000);
  };

  const handlePanEnd = (info) => {
    const minVelocity = Math.abs(info.velocity.x) > 80;
    const minDistance = Math.abs(info.offset.x) > size / 48;
    const direction = info.offset.x > 0 ? -1 : 1;

    if (minDistance && minVelocity && isFirst) {
      rotateArray(direction);
      setXY(info, 0, 0);
    } else {
      setXY(info, 0, 0);
    }
  };

  return (
    <motion.div
      className={styles.card}
      onTap={() => {
        rotateArray(i - length);
      }}
      onPan={(_, info) => {
        isFirst ? setXY(info, 0.8, 0.35) : setXY(info, 0.15, 0.15);
      }}
      onPanEnd={(_, info) => {
        handlePanEnd(info);
      }}
      whileHover={{ scale: 1.05 }}
      transition={spring}
      animate={{
        x: posX,
        y: posY,
        z: posZ,
        rotateX: rotX,
        rotateY: rotY,
        rotateZ: rotZ,
        background: background,
        transition: {
          delay: (iFromFirst + current) * 0.025,
        },
      }}
      style={{
        position: "absolute",
        x: dPosX,
        y: dPosY,
        z: dPosZ,
        rotateX: dRotX,
        rotateY: dRotY,
        rotateZ: dRotZ,
        width: `${cardWidth}px`,
        minWidth: 280,
        maxWidth: 324,
        height: `${cardHeight}px`,
        minHeight: 412,
        maxHeight: 424,
        top: `50%`,
        left: `50%`,
        zIndex: length - i,
        borderRadius: `${size * 0.025}px`,
        userSelect: "none",
        overflow: "hidden",
        cursor: isFirst ? "grab" : "pointer",
        boxShadow: `0 ${size * 0.025}px ${size * 0.05}px ${
          size * 0.025
        }px hsla(0,0%,90%,0.5),
        inset 2px 2px 0 0 hsla(0,0%,100%, 0.1), rgb(0 0 0 / 20%) 0px 50px 70px -40px, rgb(0 0 0 / 100%) 0px 28px 26px -38px, rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`,
        touchAction: "auto",
      }}
    >
      <div className={styles.background} />

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.header}>
          <Image
            className={styles.profile}
            src={card.content["Profile_Link"]}
            alt={"profile"}
            width={48}
            height={48}
          />
          <div className={styles.titles}>
            <h5>
              {card.content["Name"]}, {card.content["Age"]}
            </h5>
            <p>{card.content["Lives"]}</p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            <em>{card.content["Title_1"]}</em>
            <p>{card.content["Title_1_Value"]}</p>
          </div>
          <div className={styles.item}>
            <em>{card.content["Title_2"]}</em>
            <p>{card.content["Title_2_Value"]}</p>
          </div>
          <div className={styles.item}>
            <em>{card.content["Title_3"]}</em>
            <p>{card.content["Title_3_Value"]}</p>
          </div>
        </div>
        <div className={styles.item}>
          <em>{card.content["Title_4"]}</em>
          {card.content["Title_4_Value"] && (
            <div className={styles.assets}>
              {card.content["Title_4_Value"].map((item, index) => (
                <strong key={index}>{item}</strong>
              ))}
            </div>
          )}
        </div>
        {/* <div className={styles.make}>
          <p>Net Worth</p>
          <div
            className={styles.large}
            style={{
              fontSize: `${size * 0.13}px`,
            }}
          >
            {name}
          </div>
        </div> */}
      </div>

      <div className={styles.gradient} />
    </motion.div>
  );
};

export default Card;

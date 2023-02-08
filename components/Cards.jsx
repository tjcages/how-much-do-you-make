import { Tile } from "./Tile";
import { useParentSize } from "../modules/hooks";
import { useState } from "react";

import Card from "./Card";

const Cards = ({ cards, col, row }) => {
  // Mapping function to create duplicates with UIDs
  const mapData = (data, prefix) =>
    cards.map((item, i) => ({
      id: `${prefix}${i}`,
      content: item,
      index: i,
    }));

  // Array we are going to work with
  const dataClone = [
    // First 3 duplicates are going to be rendered:
    // One is for exit animations
    ...mapData(cards, "1"),
    // Second one is being displayed on screen
    ...mapData(cards, "2"),
    // Third one is for inital aniamtion
    ...mapData(cards, "3"),
    // Last one is to avoid cards animation
    // from the final position to the initial one
    ...mapData(cards, "4"),
  ];

  const [ref, size] = useParentSize();
  const [state, setState] = useState({ current: 0, arr: dataClone });

  const rotateArray = (n = 1) => {
    const newArr = [...state.arr];
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        const first = newArr.shift();
        newArr.push(first);
      }
      setState({ current: n, arr: newArr });
    } else {
      for (let i = 0; i < -n; i++) {
        const last = newArr.pop();
        newArr.unshift(last);
      }
      setState({ current: n, arr: newArr });
    }
  };

  return (
    <Tile
      cards={cards}
      captionTop=""
      captionBot="Read the interviews →"
      col={col}
      row={row}
      ref={ref}
      dark
      perspective
      // perspectiveDist is defined in relation
      // with the parent container
      perspectiveDist={size / 2}
    >
      {state.arr.map(
        (item, i) =>
          // Render only first 3 copies of data.
          // The fourth copy should be out of render,
          // otherwise cards will also animate
          // from last to first position
          i < cards.length * 3 && (
            <Card
              key={item.id}
              i={i}
              current={state.current}
              card={item}
              rotateArray={rotateArray}
              length={cards.length}
              size={size}
              style={state.style}
            />
          )
      )}
    </Tile>
  );
};

export default Cards;

import { Tile } from "./Tile";
import { useParentSize } from "../modules/hooks";
import { useState } from "react";

import Card from "./Card";

//  Create some data where each item
//  in the array will represent an unique card

const data = ["$450k", "$10M", "$250k", "$3.2M", "$5"];

// Mapping function to create duplicates with UIDs
const mapData = (data, prefix) =>
  data.map((item, i) => ({
    id: `${prefix}${i}`,
    content: item,
    index: i,
  }));

// Array we are going to work with
const dataClone = [
  // First 3 duplicates are going to be rendered:
  // One is for exit animations
  ...mapData(data, "1"),
  // Second one is being displayed on screen
  ...mapData(data, "2"),
  // Third one is for inital aniamtion
  ...mapData(data, "3"),
  // Last one is to avoid cards animation
  // from the final position to the initial one
  ...mapData(data, "4"),
];

const Cards = ({ col, row }) => {
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
          i < data.length * 3 && (
            <Card
              key={item.id}
              i={i}
              current={state.current}
              name={item.content}
              rotateArray={rotateArray}
              length={data.length}
              size={size}
              style={state.style}
            />
          )
      )}
    </Tile>
  );
};

export default Cards;

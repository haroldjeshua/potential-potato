"use strict";

const wrapper = document.querySelector(".tiles");
console.log(wrapper);

let columns = 0;
let rows = 0;

const colors = [
  "hsl(83, 60%, 69%)",
  "hsl(138, 60%, 69%)",
  "hsl(1, 60%, 69%)",
  "hsl(261, 60%, 69%)",
  "hsl(318, 60%, 69%)",
  "hsl(192, 60%, 69%)",
];

let count = -1;

const handleOnClick = (index) => {
  //   count += 1;
  count = count + 1;

  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
  });
};

const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");

  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();

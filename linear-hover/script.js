// const handleOnMouseMove = (e) => {
//   const { currentTarget: target } = e;

//   const rect = target.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   target.style.setProperty("--mouse-x", `${x}px`);
//   target.style.setProperty("--mouse-y", `${y}px`);
// };

// for (const card of document.querySelectorAll(".card")) {
//   card.onmousemove = (e) => handleOnMouseMove(e);
// }

document.querySelector(".cards").onmousemove = (e) => {
  for (const card of document.querySelectorAll(".card")) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

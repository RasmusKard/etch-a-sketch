const gridContainer = document.querySelector("#grid-container");

function makeGrid(gridsize) {
  for (let i = 0; i < gridsize; i++) {
    const newColumn = document.createElement("div");
    newColumn.classList.add("grid-column");

    gridContainer.appendChild(newColumn);

    for (let i = 0; i < gridsize; i++) {
      const newRow = document.createElement("div");
      newRow.classList.add("grid-element");
      newColumn.appendChild(newRow);
    }
  }
}

// document.addEventListener('mouseover', (event) => {
//     event.preventDefault();
//     if (event.key === 'Shift') {
//         // const thing = document.getElementsByClassName('grid-element')
//         // thing.style.animationPlayState = 'running'
//         // console.log(thing)
//         // insertRule()
//         // muuda scs
//         // timer
//     }
// })

makeGrid(50);

const gridElements = document.querySelectorAll(".grid-element");

document.addEventListener("keydown", function (event) {
  if (event.repeat === true) return;
  console.log(event);
  if (event.key === "Shift") {
    gridElements.forEach(function (element) {
      element.classList.add("shift-held");
    });
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    gridElements.forEach(function (element) {
      element.classList.remove("shift-held");
    });
  }
});

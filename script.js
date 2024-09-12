const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", () => {
  makeGrid(gridSizePrompt());
});

const styleSheet = document.querySelector(":root");

function makeGrid(gridsize) {
  const gridContainer = document.querySelector("#grid-container");

  // Remove old grid if exists
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create a grid
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

  // Draw when holding down shift

  const gridElements = document.querySelectorAll(".grid-element");

  document.addEventListener("keydown", function (event) {
    if (event.repeat === true) {
      let randomColorRgb = [];
      for (let i = 0; i < 3; i++) {
        const randomRgbValue = Math.floor(Math.random() * 255);
        randomColorRgb.push(randomRgbValue);
      }
      styleSheet.style.setProperty(
        "--animation-color",
        `rgb(${randomColorRgb})`
      );
      return;
    }

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
}

function gridSizePrompt() {
  const userGridSize = prompt("What size canvas would you like? (1 to 100)");

  if (userGridSize >= 1 && userGridSize <= 100) {
    return userGridSize;
  } else {
    alert("Invalid value, try again.");
  }
}

const gridContainer = document.querySelector(".sketchpad");
const erase = document.getElementById("id2");
const sketch = document.getElementById("id1");
const RGB = document.getElementById("id3");

var slider = document.getElementById("myRange");

function updateGrid() {
  const gridSize = slider.value;
  gridContainer.innerHTML = "";
  for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
      sketch.addEventListener("click", function () {
        gridItem.addEventListener("mouseover", () => {
          gridItem.style.backgroundColor = "black";
        });
      });

      RGB.addEventListener("click", () => {
        gridItem.addEventListener("mouseover", () => {
          const randomRed = Math.floor(Math.random() * 256);
          const randomGreen = Math.floor(Math.random() * 256);
          const randomBlue = Math.floor(Math.random() * 256);
          gridItem.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
        });
      });
      erase.addEventListener("click", function () {
        gridItem.addEventListener("mouseover", () => {
          gridItem.style.backgroundColor = "white";
        });
      });
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }
}

slider.addEventListener("input", updateGrid);

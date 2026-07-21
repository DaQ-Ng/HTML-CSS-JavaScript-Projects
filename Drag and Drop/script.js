const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  //This allows the drop location to know which element is being moved when you release it
  //e.dataTransfer --the object that carries data during a drag operation
  //.setData --the format/type of the data
  //.the actual value being stored, in this case the id of the dragged element
  e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
  console.log("Drag ended");
}

function dragOver(e) {
  // This line is important because by default, browsers don't allow you to drop elements onto other elements.
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

  this.classList.add("over");
}

function dragLeave(e) {
  e.preventDefault();

  this.classList.remove("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain"); //get id from the datTransfer clipboard

  const card = document.getElementById(id); // store id in card variable

  this.appendChild(card); //append the card to the list

  this.classList.remove("over"); // remove class over
}

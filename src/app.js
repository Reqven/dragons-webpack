import "core-js/stable";
import { getAVGForceById } from "./data/forces";
import { getRelationsById } from "./data/relationships";
import dragons, { getDragonById } from "./data/dragons";


let ascendingOrder = true;

const addCount = () => {
  const countTitle = document.querySelector("#count");
  countTitle.innerHTML = `Count: ${dragons.count}`;
};

const addDragons = () => {
  const dragonList = document.querySelector("#dragons");

  for (const dragon of dragons.names) {
    const dragonLi = document.createElement("li");
    const relationList = document.createElement("ul");

    const avg = getAVGForceById(dragon.id);
    const relations = getRelationsById(dragon.id).map((id) =>getDragonById(id));

    dragonLi.id = dragon.id;
    dragonLi.innerHTML = `${dragon.id}. ${dragon.name}`;
    dragonLi.innerHTML += dragon?.element ? `, element: ${dragon.element}` : "";
    dragonLi.innerHTML += `, force: ${avg}`;

    for (const relatedDragon of relations) {
      const relatedDragonLi = document.createElement("li");
      relatedDragonLi.innerHTML = relatedDragon.name;
      relationList.appendChild(relatedDragonLi);
    }
    dragonLi.appendChild(relationList);
    dragonList.appendChild(dragonLi);
  }
};

const onOrder = (e) => {
  const dragonList = document.querySelector("#dragons");
  ascendingOrder = !ascendingOrder;

  Array.from(dragonList.children)
    .sort((a, b) => (ascendingOrder ? a.id - b.id : b.id - a.id))
    .forEach((li) => dragonList.appendChild(li));
};

document.body.onload = () => {
  addCount();
  setTimeout(() => {
    addDragons();
    const orderButton = document.querySelector("#order");
    orderButton.addEventListener("click", onOrder);
  }, 500);
};

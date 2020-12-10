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

    const { id, name, element } = dragon;
    const avg = getAVGForceById(dragon.id);
    const relations = getRelationsById(dragon.id).map((id) => getDragonById(id));

    dragonLi.id = id;
    dragonLi.innerHTML = `${id}. ${name}`;
    dragonLi.innerHTML += element ? `, element: ${element}` : "";
    dragonLi.innerHTML += `, force: ${avg}`;
    dragonLi.setAttribute('force', avg);

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
    .map(li => ({ li, force: li.getAttribute('force') }))
    .sort((a, b) => (ascendingOrder ? a.force - b.force : b.force - a.force))
    .forEach(data => dragonList.appendChild(data.li));
};

document.addEventListener("DOMContentLoaded", (e) => {
  addCount();
  setTimeout(() => {
    addDragons();
    const orderButton = document.querySelector("#order");
    orderButton.addEventListener("click", onOrder);
  }, 500);
});

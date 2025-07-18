import { Link } from "react-router-dom";
export default function PackingPlanner() {

const campingItems = [
  { name: "tent", category: "sleep&shelter", packed: false },
  { name: "hammock", category: "sleep&shelter", packed: false },
  { name: "blanket", category: "sleep&shelter", packed: false },
  { name: "tarp", category: "sleep&shelter", packed: false },
  { name: "sleeping bag", category: "sleep&shelter", packed: false },
  { name: "sleeping pad", category: "sleep&shelter", packed: false },
  { name: "pillow", category: "sleep&shelter", packed: false },
  { name: "camp chair", category: "sleep&shelter", packed: false },
  { name: "camp table", category: "sleep&shelter", packed: false },

  { name: "camping stove", category: "cooking&hydration", packed: false },
  { name: "fuel canister", category: "cooking&hydration", packed: false },
  { name: "lighter", category: "cooking&hydration", packed: false },
  { name: "cookware set", category: "cooking&hydration", packed: false },
  { name: "eating utensils", category: "cooking&hydration", packed: false },
  { name: "cutting board", category: "cooking&hydration", packed: false },
  { name: "cooking knife", category: "cooking&hydration", packed: false },
  { name: "cooler", category: "cooking&hydration", packed: false },
  { name: "water bottle", category: "cooking&hydration", packed: false },
  { name: "water filter", category: "cooking&hydration", packed: false },

  { name: "first aid kit", category: "misc", packed: false },
  { name: "headlamp", category: "misc", packed: false },
  { name: "flashlight", category: "misc", packed: false },
  { name: "extra batteries", category: "misc", packed: false },
  { name: "map", category: "misc", packed: false },
  { name: "compass", category: "misc", packed: false },
  { name: "trash bags", category: "misc", packed: false },
  { name: "fire starter", category: "misc", packed: false },

  { name: "biodegradable soap", category: "hygiene&comfort", packed: false },
  { name: "toilet paper", category: "hygiene&comfort", packed: false },
  { name: "toothbrush", category: "hygiene&comfort", packed: false },
  { name: "toothpaste", category: "hygiene&comfort", packed: false },
  { name: "bug repellent", category: "hygiene&comfort", packed: false },
  { name: "sunscreen", category: "hygiene&comfort", packed: false },

  { name: "trowel", category: "clothing&gear", packed: false },
  { name: "clothing layers", category: "clothing&gear", packed: false },
  { name: "rain jacket", category: "clothing&gear", packed: false },
  { name: "hiking boots", category: "clothing&gear", packed: false },
  { name: "hat", category: "clothing&gear", packed: false },
  { name: "backpack", category: "clothing&gear", packed: false },
  { name: "dry bags", category: "clothing&gear", packed: false },
  { name: "multi-tool", category: "clothing&gear", packed: false },
  { name: "knife", category: "clothing&gear", packed: false },
  { name: "hatchet", category: "clothing&gear", packed: false },
  { name: "fishing pole", category: "clothing&gear", packed: false },
  { name: "tacklebox", category: "clothing&gear", packed: false },



];

const unpackedItemList = () => {
  return campingItems
    .map((item) => (
      <li className="item-box">{item.name}</li>
    ));
};

  return (
    <main id="packing-list">
      <ul id="left-column">
      {unpackedItemList()}
      </ul>
      <ul id="right-column">
        <p>right list</p>
      </ul>
    </main>
  );
}

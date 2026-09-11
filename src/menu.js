export function createMenuTab() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  const items = ["Grilled Steak - $25", "Pasta Carbonara - $18", "Caesar Salad - $12"];

  items.forEach((itemText) => {
    const li = document.createElement("li");
    li.textContent = itemText;
    menuList.appendChild(li);
  });

  container.appendChild(headline);
  container.appendChild(menuList);

  return container;
}
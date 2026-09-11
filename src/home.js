export function createHomeTab() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Gourmet Restaurant!";

  const description = document.createElement("p");
  description.textContent = "We serve the finest dishes made with organic and fresh ingredients.";

  container.appendChild(headline);
  container.appendChild(description);

  return container;
}
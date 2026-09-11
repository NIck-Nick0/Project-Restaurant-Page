export function createContactTab() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const details = document.createElement("p");
  details.textContent = "📞 Phone: +123 456 789 | 📍 Location: Downtown City";

  container.appendChild(headline);
  container.appendChild(details);

  return container;
}
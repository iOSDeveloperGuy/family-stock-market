const companies = [
  { name: "Moonshot Pizza", ticker: "MOON", price: 42.0 },
  { name: "Backyard Robotics", ticker: "YARD", price: 68.5 },
  { name: "Cozy Cloud", ticker: "COZY", price: 25.25 },
  { name: "Rocket Shoes", ticker: "ZOOM", price: 91.75 },
  { name: "Snack Labs", ticker: "SNAX", price: 13.4 },
];

const market = document.querySelector("#market");
const advanceDayButton = document.querySelector("#advance-day");

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function renderMarket() {
  market.replaceChildren(
    ...companies.map((company) => {
      const card = document.createElement("article");
      card.className = "stock";
      card.innerHTML = `
        <h3>${company.name}</h3>
        <span class="ticker">${company.ticker}</span>
        <p class="price">${formatMoney(company.price)}</p>
      `;
      return card;
    }),
  );
}

function advanceDay() {
  for (const company of companies) {
    const change = 1 + (Math.random() * 0.12 - 0.06);
    company.price = Math.max(1, Math.round(company.price * change * 100) / 100);
  }
  renderMarket();
}

advanceDayButton.addEventListener("click", advanceDay);
renderMarket();


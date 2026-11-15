const searchForm = document.querySelector(".technique-search");

if (searchForm) {
  const searchInput = searchForm.querySelector('input[type="search"]');
  const cards = document.querySelectorAll(".technique-card");
  const resultsMessage = document.querySelector("#search-results");
  const queryFromUrl = new URLSearchParams(window.location.search).get("q");

  const normalize = (value) =>
    value.normalize("NFC").toLocaleLowerCase("tr-TR").trim();

  if (queryFromUrl !== null) {
    searchInput.value = queryFromUrl;
  }

  const filterCards = () => {
    const query = normalize(searchInput.value);
    let visibleCards = 0;

    cards.forEach((card) => {
      const searchableText = normalize(
        `${card.dataset.etiket} ${card.textContent}`
      );
      const matches = searchableText.includes(query);

      card.hidden = !matches;
      if (matches) visibleCards += 1;
    });

    resultsMessage.hidden = visibleCards !== 0;
  };

  searchInput.addEventListener("input", filterCards);
  filterCards();
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const contactStatus = document.querySelector("#contact-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactStatus.hidden = false;
  });
}

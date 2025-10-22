

// List of all pages
const pages = [
  { title: "Home", url: "index.html" },
  { title: "Business Support", url: "./BusinessSupport.html" },
  { title: "Career Info, Advice & Guidance", url: "CareerInfoSupport.html" },
  { title: "Drug and Alcohol Dependency", url: "drugs.html" },
  { title: "Employment Support", url: "EmploymentSupport.html" },
  { title: "Mental Health Support", url: "MentalSupport.html" },
  { title: "Upskilling Support", url: "UpskillingSupport.html" },
  { title: "Welfare Support", url: "WelfareSupport.html" },
  { title: "Interview Prep", url: "InterviewPrep.html" }
];

// This runs when you submit the search form
function attachSearch() {
  const searchBox = document.querySelector(".searchBox");
  const searchInput = document.querySelector(".search");

  if (!searchBox) return; // safety check

  searchBox.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const results = pages.filter(p => p.title.toLowerCase().includes(query));
    if (results.length > 0) {
      window.location.href = results[0].url;
    } else {
      alert("No results found.");
    }
  });
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    // If the page is loaded from cache, reload it
    window.location.reload();
  }
});
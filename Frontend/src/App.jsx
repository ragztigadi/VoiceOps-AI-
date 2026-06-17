import { useState } from "react";
import "./App.css";
import LiveKitModal from "./components/LivekitModal";

const CATEGORIES = [
  { name: "Batteries", img: "https://placehold.co/200x140?text=Batteries" },
  { name: "Brakes", img: "https://placehold.co/200x140?text=Brakes" },
  { name: "Oil & Fluids", img: "https://placehold.co/200x140?text=Oil+%26+Fluids" },
  { name: "Filters", img: "https://placehold.co/200x140?text=Filters" },
  { name: "Wipers", img: "https://placehold.co/200x140?text=Wipers" },
  { name: "Lighting", img: "https://placehold.co/200x140?text=Lighting" },
];

function App() {
  const [showSupport, setShowSupport] = useState(false);
  const [query, setQuery] = useState("");

  const handleSupportClick = () => setShowSupport(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    console.log("search:", query);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">AutoZone</div>
        <nav>
          <a href="#">Shop</a>
          <a href="#">Deals</a>
          <a href="#">Stores</a>
          <a href="#">Help</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Get the Right Parts. Right Now</h1>
          <p>Free Next Day Delivery on Eligible Orders</p>
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter vehicle or part number"
            />
            <button type="submit">Search</button>
          </form>
        </section>

        <section className="categories">
          {CATEGORIES.map((cat) => (
            <div className="category-card" key={cat.name}>
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </section>
      </main>

      <button className="support-button" onClick={handleSupportClick}>
        Talk to an Agent!
      </button>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport} />}
    </div>
  );
}

export default App;
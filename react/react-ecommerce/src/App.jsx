// import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Rating40 from "./assets/ratings/rating-40.png";
import Rating45 from "./assets/ratings/rating-45.png";
import SocksImage from "./assets/athletic-cotton-socks-6-pairs.jpg";
import BasketballImage from "./assets/intermediate-composite-basketball.jpg";
import TshirtImage from "./assets/adults-plain-cotton-tshirt-2-pack-teal.jpg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div className="product-container">
          <div className="item-container">
            <img
              className="item-image"
              src={SocksImage}
              alt="socks"
            />
            <div className="item-text">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div className="item-rating">
              <img
                className="item-rating-image"
                src={Rating45}
                alt="rating star"
              />
              <a className="item-rating-link" href="#">
                87
              </a>
            </div>
            <div className="item-price">$10.90</div>
            <select
              className="item-quantity-selector"
              name="item-quantity"
              id="quantity-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="item-cart-button">Add to Cart</button>
          </div>
          <div className="item-container">
            <img
              className="item-image"
              src={BasketballImage}
              alt="basketball"
            />
            <div className="item-text">Intermediate Size Basketball</div>
            <div className="item-rating">
              <img
                className="item-rating-image"
                src={Rating40}
                alt="rating star"
              />
              <a className="item-rating-link" href="#">
                127
              </a>
            </div>
            <div className="item-price">$20.95</div>
            <select
              className="item-quantity-selector"
              name="item-quantity"
              id="quantity-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="item-cart-button">Add to Cart</button>
          </div>
          <div className="item-container">
            <img
              className="item-image"
              src={TshirtImage}
              alt="tshirt"
            />
            <div className="item-text">Adults Plain Cotton T-Shirt - 2 Pack</div>
            <div className="item-rating">
              <img
                className="item-rating-image"
                src={Rating45}
                alt="rating star"
              />
              <a className="item-rating-link" href="#">
                56
              </a>
            </div>
            <div className="item-price">$7.99</div>
            <select
              className="item-quantity-selector"
              name="item-quantity"
              id="quantity-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="item-cart-button">Add to Cart</button>
          </div>
        </div>
      </main>
      <footer>2026 react ecommerce project</footer>
    </>
  );
}

export default App;

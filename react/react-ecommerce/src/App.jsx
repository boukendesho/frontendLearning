// import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div class="product-container">
          <div class="item-container">
            <img
              class="item-image"
              src="../../images/products/athletic-cotton-socks-6-pairs.jpg"
              alt="socks"
            />
            <div class="item-text">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div class="item-rating">
              <img
                class="item-rating-image"
                src="../../images/ratings/rating-45.png"
                alt="rating star"
              />
              <a class="item-rating-link" href="#">
                87
              </a>
            </div>
            <div class="item-price">$10.90</div>
            <select
              class="item-quantity-selector"
              name="item-quantity"
              id="quantity-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button class="item-cart-button">Add to Cart</button>
          </div>
          <div class="item-container">
            <img
              class="item-image"
              src="../../images/products/intermediate-composite-basketball.jpg"
              alt="socks"
            />
            <div class="item-text">Intermediate Size Basketball</div>
            <div class="item-rating">
              <img
                class="item-rating-image"
                src="../../images/ratings/rating-40.png"
                alt="rating star"
              />
              <a class="item-rating-link" href="#">
                127
              </a>
            </div>
            <div class="item-price">$20.95</div>
            <select
              class="item-quantity-selector"
              name="item-quantity"
              id="quantity-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button class="item-cart-button">Add to Cart</button>
          </div>
          <div class="item-container">
            <img
              class="item-image"
              src="../../images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
              alt="socks"
            />
            <div class="item-text">Adults Plain Cotton T-Shirt - 2 Pack</div>
            <div class="item-rating">
              <img
                class="item-rating-image"
                src="../../images/ratings/rating-45.png"
                alt="rating star"
              />
              <a class="item-rating-link" href="#">
                56
              </a>
            </div>
            <div class="item-price">$7.99</div>
            <select
              class="item-quantity-selector"
              name="item-quantity"
              id="quantity-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button class="item-cart-button">Add to Cart</button>
          </div>
        </div>
      </main>
      <footer>2026 react ecommerce project</footer>
    </>
  );
}

export default App;

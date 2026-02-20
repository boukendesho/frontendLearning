// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <section class="left-section">
          <a href="/">
            <img src="../../images/amazon-logo-white.png" alt="site logo" />
          </a>
        </section>
        <section class="middle-section">
          <input type="search" name="search" id="search" placeholder="Search" />
          <div>
            <button type="button">
              <img
                src="../../images/font-awesome-right-arrow.svg"
                alt="search icon"
              />
            </button>
          </div>
        </section>
        <section class="right-section">
          <a class="orders-link" href="orders">
            Orders
          </a>
          <a class="cart-link" href="checkout">
            <img
              class="cart-icon"
              src="../../images/font-awesome-cart-white.svg"
              alt="cart icon"
            />
            <div class="cart-quantity">3</div>
            <div class="cart-text">Cart</div>
          </a>
        </section>
      </header>
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

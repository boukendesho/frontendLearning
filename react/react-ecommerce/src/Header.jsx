import "./Header.css";
export function Header() {
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
    </>
  );
}

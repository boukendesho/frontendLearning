import "./Header.css";
import Logo from "./assets/amazon-logo-white.png";
import SearchArrow from "./assets/font-awesome-right-arrow.svg";
import CartIcon from "./assets/font-awesome-cart-white.svg";

function Header() {
  return (
    <>
      <header>
        <section className="left-section">
          <a href="/">
            <img src={Logo} alt="site logo" />
          </a>
        </section>
        <section className="middle-section">
          <input type="search" name="search" id="search" placeholder="Search" />
          <div>
            <button type="button">
              <img src={SearchArrow} alt="search icon" />
            </button>
          </div>
        </section>
        <section className="right-section">
          <a className="orders-link" href="orders">
            Orders
          </a>
          <a className="cart-link" href="checkout">
            <img className="cart-icon" src={CartIcon} alt="cart icon" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </section>
      </header>
    </>
  );
}

export default Header;

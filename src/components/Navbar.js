import { useSelector } from "react-redux";

export default function Navbar({ setPageRender }) {
  const products = useSelector((state) => state.cart.cartProducts);

  const productsCount = () => {
    return products.length
      ? products.reduce((prevQuantity, currentQuantity) => {
        return prevQuantity + parseInt(currentQuantity.quantity);
      }, 0)
      : 0;
  };

  const handleCartPage = (e) => {
    e.preventDefault();
    setPageRender(true);
  };
  const handleHomePage = (e) => {
    e.preventDefault();
    setPageRender(false);
  };
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <h1 className="logo">logo</h1>
        </a>

        <div className="flex gap-4">
          <a
            href="#home"
            className="navHome"
            id="lws-home"
            onClick={handleHomePage}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="cart.html"
            className="navCart"
            id="lws-cart"
            onClick={handleCartPage}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{productsCount()}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

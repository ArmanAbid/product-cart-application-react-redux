import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

export default function CartContainer() {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
          {/* <!-- Cart Item --> */}
            <CartItem/>
          </div>
          {/* <!-- Bill Details --> */}
          <BillDetails/>
        </div>
      </div>
    </main>
  );
}

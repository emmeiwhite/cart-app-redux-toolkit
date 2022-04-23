import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./../features/cart/cartSlice";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, totalAmout } = useSelector((store) => {
    return store.cart;
  });
  if (cartItems.length < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bar</h2>
      </header>

      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {totalAmout}</span>
          </h4>
        </div>

        {/* We are dispatching an action  */}
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;

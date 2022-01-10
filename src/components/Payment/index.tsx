import React, { useContext, useMemo, useState } from "react";
import { Context } from "../../context/CheckoutContext";
import { PayContext } from "../../context/PaymentContext";
import { WineProps } from "../shared/Wine";
import { toast } from "react-toastify";

interface CardProps {
  sectionOne: string;
  sectionTwo: string;
  sectionThree: string;
  sectionFour: string;
}

const Index: React.FC<{}> = () => {
  const { wine, clearItems } = useContext(Context);
  const { changePage } = useContext(PayContext);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [cardState, setCardState] = useState<CardProps>({} as CardProps);

  useMemo(() => {
    setTotalPrice(0);
    return wine.forEach((w: WineProps) => {
      setTotalPrice((prev: number) => prev + w.price);
    });
  }, [wine]);

  const cartItems: JSX.Element[] = wine.map((w: WineProps) => (
    <div key={w.id} className="cart-item">
      <span>{w.name}</span>
      <p>{w.description}</p>
      <div>₦{w.price}</div>
    </div>
  ));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardState((prev: CardProps) => ({
      ...prev,
      [name]: value,
    }));
  };

  const close = (e: React.MouseEvent<HTMLSpanElement>) => {
    changePage("description");
  };

  const pay = (e: React.MouseEvent<HTMLButtonElement>) => {
    toast.success("Payment Successful!");
    setTimeout(() => {
      clearItems();
    }, 0);
  };

  return (
    <div className="payment">
      <h3>Checkout Page</h3>
      <div className="total">
        <span onClick={close}>X</span> <span> Total: ₦{totalPrice}</span>
      </div>
      {cartItems}

      {wine.length > 0 ? (
        <>
          <div className="card-details">
            <h3>Card Details</h3>
          </div>
          <h4>Card Number</h4>
          <div className="card-details">
            <form>
              <input
                name="sectionOne"
                onChange={handleChange}
                maxLength={4}
                type="text"
                placeholder="X-X-X-X"
                value={cardState.sectionOne}
              />
              <input
                name="sectionTwo"
                onChange={handleChange}
                maxLength={4}
                type="text"
                placeholder="X-X-X-X"
                value={cardState.sectionTwo}
              />
              <input
                name="sectionThree"
                onChange={handleChange}
                maxLength={4}
                type="text"
                placeholder="X-X-X-X"
                value={cardState.sectionThree}
              />
              <input
                name="sectionFour"
                onChange={handleChange}
                maxLength={4}
                type="text"
                value={cardState.sectionFour}
                placeholder="X-X-X-X"
              />
            </form>
          </div>
          <div className="card-details">
            <form>
              <input
                name="sectionOne"
                onChange={handleChange}
                maxLength={4}
                type="text"
                placeholder="mm/yy"
                value={cardState.sectionOne}
              />
              <input
                name="sectionTwo"
                onChange={handleChange}
                maxLength={4}
                type="text"
                placeholder="CVV"
                value={cardState.sectionTwo}
              />
            </form>
          </div>
        </>
      ) : null}
      {wine.length > 0 ? (
        <div className="pay">
          <button onClick={pay}>Pay Now!</button>
        </div>
      ) : null}
    </div>
  );
};

export default Index;

import { useContext, useState, useMemo } from "react";
import { Context } from "../../context/CheckoutContext";
import { WineProps } from "../shared/Wine";

import { Link } from "react-router-dom";
import MobileLayout from "./MobileLayout";
import { ToggleContext } from "../../context/MenuContext";
import { PayContext } from "../../context/PaymentContext";

const Layout: React.FC<{}> = ({ children }) => {
  const { wine } = useContext(Context);
  const { changePage } = useContext(PayContext);

  const handleChange =
    (page: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      changePage(page);
    };

  const { toggle } = useContext(ToggleContext);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useMemo(() => {
    setTotalPrice(0);
    return wine.forEach((w: WineProps) => {
      setTotalPrice((prev: number) => prev + w.price);
    });
  }, [wine]);

  return (
    <>
      <MobileLayout />
      <div className="container">
        <nav>
          <Link to="/">
            <div className="title">Winery</div>
            <div onClick={() => toggle("show")} className="bars-boxx">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </Link>
          <ul>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/our-story">
              <li>Our Picstory</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
          </ul>
          <div className="side-menu">
            <span>EN</span>
            <div className="bars-box">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="price">
            <span>₦{totalPrice}</span>
            <span>{wine.length} items</span>
            <button onClick={handleChange("cart")} className="payMobile">
              Pay
            </button>
          </div>
        </nav>
        <div className="children">{children}</div>
      </div>
    </>
  );
};

export default Layout;

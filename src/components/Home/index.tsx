import { useContext } from "react";

import Layout from "../layouts/Layout";
import Checkout from "../Checkout";
import Payment from "../Payment";
import { PayContext } from "../../context/PaymentContext";

const Index: React.FC<{}> = ({}) => {
  const { page } = useContext(PayContext);

  const Pages = {
    description: (
      <>
        <p>Just relax and go with the flow</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rem
          autem, iste consequuntur eum explicabo repellendus aperiam quas
          placeat nihil, reiciendis facere a ipsam sit laborum quia labore
          recusandae eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore rem autem, iste consequuntur eum explicabo
          repellendus aperiam quas placeat nihil, reiciendis facere a ipsam sit
          laborum quia labore recusandae eligendi?
        </p>
        <button>Blessed Up</button>
      </>
    ),
    cart: <Payment />,
  } as any;

  return (
    <Layout>
      <div className="home">
        <section>{Pages[page]}</section>
        <section>
          <Checkout />
        </section>
      </div>
    </Layout>
  );
};

export default Index;

import { useContext } from "react";
import Wine, { WineProps } from "../shared/Wine";

import wine1 from "/wine-1.png";
import wine2 from "/wine-2.png";
import wine3 from "/wine-3.png";
import wine4 from "/wine-4.png";
import React, { useState } from "react";
import { PayContext } from "../../context/PaymentContext";

const wineObj = [
  {
    id: 1,
    name: "Wine 1",
    description: "Lorem ipsum dolor sit amet consectetur ",
    img: wine1,
    price: 4000,
  },
  {
    id: 2,
    name: "Wine 2",
    description: "Lorem ipsum dolor sit amet consectetur ",
    img: wine2,
    price: 3400,
  },
  {
    id: 3,
    name: "Wine 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    img: wine3,
    price: 5000,
  },
  {
    id: 4,
    name: "Wine 4",
    description: "Lorem ipsum dolor sit amet ",
    img: wine4,
    price: 4000,
  },
];

const Index: React.FC<{}> = () => {
  const { page, changePage } = useContext(PayContext);

  const [wineArray, _] = useState<Array<WineProps>>(wineObj);

  const wineList = wineArray.map((wine: WineProps) => (
    <Wine key={wine.id} wineData={wine} />
  ));

  const handleChange =
    (page: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      changePage(page);
    };

  return (
    <div className="checkout">
      <div onClick={handleChange("cart")} className="go-to-cart">
        Pay
      </div>
      {wineList}
    </div>
  );
};

export default Index;

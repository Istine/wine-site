import React, { useContext, useState } from "react";
import { Context } from "../../context/CheckoutContext";

export interface WineProps {
  img: string;
  name: string;
  description: string;
  price: number;
  id: number;
}

const Wine: React.FC<{ wineData: WineProps }> = ({ wineData }) => {
  const { wine, addToCheckout } = useContext(Context);

  const addItem =
    (item: WineProps) => (e: React.MouseEvent<HTMLDivElement>) => {
      addToCheckout(item);
    };

  return (
    <div className="wine">
      <img loading="lazy" src={wineData.img} alt="wine-1" />
      <div className="wine-description">
        {wineData.name}: {wineData.description}
      </div>
      <div className="wine-price">
        <span>₦{wineData.price}</span>
        <div onClick={addItem(wineData)} className="add">
          +
        </div>
      </div>
    </div>
  );
};

export default Wine;

import React from "react";
import SectionHeading from "./SectionHeading";
import useData from "../../Hooks/useData";

const PopularProducts = () => {
  const {products} = useData()
  return (
    <div>
      <div className="flex justify-between items-center"  >
        <div >
          <SectionHeading
            heading={"Propular product"}
            discription={"top rated product"}
          ></SectionHeading>
        </div>
        <div className="flex flex-row gap-6">
          {products
      
            .map((product) => (<span>{product.name}</span>))}

        </div>
      </div>
    </div>
  );
};

export default PopularProducts;

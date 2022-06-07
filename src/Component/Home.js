import React from "react";
import "./style.css";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

function Home() {
  const {
    state: { product },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  // console.log(product);

  const transformProducts = () => {
    let sortedProducts = product;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;

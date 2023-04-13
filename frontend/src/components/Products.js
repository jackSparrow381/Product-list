import React from "react";
import ProductsForm from "./ProductsForm";
import ProductsTable from "./Table";

const Products = () => {
  return (
    <div>
      <ProductsForm editedRow={{}} />
      <ProductsTable />
    </div>
  );
};

export default Products;

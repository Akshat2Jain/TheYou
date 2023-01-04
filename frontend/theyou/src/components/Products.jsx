import React from "react";
import styled from "styled-components";
import { products } from "../data/products";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <>
      <Container>
        {products.map((item) => (
          <Product item={item} />
        ))}
      </Container>
    </>
  );
};

export default Products;

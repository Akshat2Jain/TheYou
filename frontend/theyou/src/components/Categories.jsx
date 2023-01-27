import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

import { categories } from "../data/data";
import SingleCategory from "./SingleCategory";

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #faf9f6;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <SingleCategory item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;

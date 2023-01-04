import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import SingleCategory from "./SingleCategory"

const Container = styled.div`
display: flex;
padding: 20px;
background-color:#FAF9F6;
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => 
          <SingleCategory item={item} key={item.id}/>
        )}
      </Container>
    </>
  );
};

export default Categories;

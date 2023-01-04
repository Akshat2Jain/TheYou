import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  transition: 0.5s;
  &:hover{
    
    cursor:pointer;
    transform: scale(0.7);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 50px;
    margin-left:245px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    margin-top:20rem;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight: 600;
    &:hover{
      background-color: grey;
    }
`;


const SingleCategory = ({item}) => {
  return (
    <>
    <Container>
    <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
    </>
  )
}

export default SingleCategory
import styled from "styled-components";

export const ProductosRoutesContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 95%;
  height: auto;
  margin-top: 100px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 550px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 95%;
  height: auto;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: #000000;
  flex-wrap: wrap;
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  width: 100%;
  margin-right: 30px;
  margin-left: 30px;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  h1 {
    font-size: 4rem;
    margin: 10px 0;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 3rem;
    }
    @media (max-width: 450px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 2rem;
    }
    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
`;

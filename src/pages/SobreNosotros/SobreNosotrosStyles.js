import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 95%;
  height: auto;
  margin-top: 110px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: #000000;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AboutImgTextStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  gap: 10px;
`;
export const AboutImgStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  img {
    width: 350px;
    height: 200px;
    border-radius: 15px;
  }
`;

export const AboutTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  width: 350px;
  gap: 10px;

  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

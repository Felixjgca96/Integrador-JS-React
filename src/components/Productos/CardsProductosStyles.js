import styled from "styled-components";

export const ProductosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 1200px;
  margin-top: 0px;
  border-radius: 15px;
  padding-bottom: 10px;

  h2 {
    font-size: 4rem;
    margin-bottom: 0px;
    margin-top: 0px;
    color: #00030a;

    @media (max-width: 900px) {
      font-size: 3rem;
    }
  }
`;

export const ProductosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1150px;
  gap: 10px;
`;
export const ContainerButtonStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: white;
  padding: 0.2rem 1rem;
  background: #74787e;
  border: 1px solid #ffffff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #00030a;
    border-radius: 5px;
  }
`;

export const ProductosCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  border-radius: 10px;
  padding: 1rem;
  border: 2px solid #ffffff;
  background-color: #00030a;
  @media (max-width: 500px) {
    width: 350px;
    flex-direction: row;
    height: 150px;
  }
  @media (max-width: 390px) {
    width: 300px;
    height: 210px;
    flex-direction: column;
  }
`;

export const ImgCard = styled.div`
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 7px;
    border-radius: 15px;

    @media (max-width: 500px) {
      width: 100px;
      height: 100px;
    }
  }
`;
export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 15px;
  width: 195px;
  height: 85px;

  h2 {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    color: white;
    @media (max-width: 420px) {
    }
  }
  @media (max-width: 420px) {
  }
`;
export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 185px;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextPrice = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

export const CardPrice = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

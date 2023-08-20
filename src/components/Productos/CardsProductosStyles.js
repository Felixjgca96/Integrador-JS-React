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
export const ButtonMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 0.2rem 1rem;
  background: #00030a;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #ffffff;

  &:hover {
    background: #74787e;
    border-radius: 5px;
  }
`;
export const ButtonMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 0.2rem 1rem;
  background: black;
  border-radius: 5px;
  border: 1px solid #ffffff;
  cursor: pointer;
  margin-top: 10px;
  background: #74787e;
  opacity: 0.5;

  &:hover {
    cursor: not-allowed;
  }
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
`;

export const ImgCard = styled.div`
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 7px;
    border-radius: 15px;
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
  }
`;
export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 185px;
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

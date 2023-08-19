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
export const ButtonMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 0.2rem 1rem;
  background: black;
  border-radius: 1rem;
  border: 1px solid #ffffff;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #b7b7a4;
    color: black;
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
  background: black;
  border-radius: 1rem;
  border: 1px solid #ffffff;
  cursor: pointer;

  &:hover {
    background: #b7b7a4;
    color: black;
  }
`;

export const ProductosCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  border-radius: 15px;
  padding: 1rem;
  border: 2px solid #ffffff;
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
  background-color: #000000;
  border-radius: 15px;
  width: 195px;
  height: 85px;

  h2 {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
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

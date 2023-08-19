import styled from "styled-components";

export const CategoriasWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 95%;
  border-radius: 20px;
  padding: 0px;
  padding-top: 0px;
  background-color: #000000;

  h2 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 4rem;
    padding: 0px;
    margin: 15px;
    @media (max-width: 900px) {
      font-size: 3rem;
    }
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  padding: 0.5rem 0.5rem;
  border-radius: 15px;

  &:hover {
    background: #b7b7a4;
    color: black;
  }

  cursor: pointer;
  h2 {
    font-size: 1rem;
    margin-bottom: 0px;
  }

  img {
    height: 60px;
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 40%;
  background: black;
  border-radius: 15px;
`;

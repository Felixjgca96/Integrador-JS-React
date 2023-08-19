import styled from "styled-components";

export const ContactoRoutesContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
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

  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.8;
  }
`;

export const FormStyled = styled.div``;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ButtonFormStyled = styled.div`
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

  &:hover {
    background: #b7b7a4;
    color: black;
  }
`;

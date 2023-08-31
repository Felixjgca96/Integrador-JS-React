import styled from "styled-components";

export const FoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  gap: 5rem;
  margin-top: 110px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 770px) {
  }
  img {
    width: 150px;
    border-radius: 5px;

    @media (max-width: 770px) {
      width: 100px;
    }
  }
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  & h1 {
    margin: 0;
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2rem;
`;

export const FoundSubtitleStyled = styled.h2`
  font-weight: 400;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerLinkStyled = styled(motion.div)``;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;

  border-radius: ${({ radius }) => `${radius}px`};
  background: var(--btn-gradient);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  z-index: 2;

  & span {
    padding: 0.5rem 1.5rem;
    background: black;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid #ffffff;

    &:hover {
      background: #b7b7a4;
      color: black;
    }
  }
`;

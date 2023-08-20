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
    background: #00030a;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #ffffff;

    &:hover {
      background: #74787e;
      border-bottom: 1px solid #ffffff;
      border-radius: 5px;
    }
  }
`;

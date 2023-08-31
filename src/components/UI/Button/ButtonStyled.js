import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: #74787e;
  }
`;

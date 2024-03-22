import React from "react";
import styled from "styled-components";

interface StarProps {
  filled?: boolean;
  onClick: () => void;
}

const StyledStar = styled.div<StarProps>`
  cursor: pointer;
  color: ${(props) => (props.filled ? "#FFD700" : "green")};
  font-size: 38px;
`;

export const Star: React.FC<StarProps> = ({ filled, onClick }) => {
  return <StyledStar onClick={onClick}>{filled ? "★" : "☆"}</StyledStar>;
};

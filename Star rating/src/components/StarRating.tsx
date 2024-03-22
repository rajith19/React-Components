import React, { useState } from "react";
import styled from "styled-components";
import { Star } from "./Star";

interface StarRatingProps {
  totalStars?: number;
}

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <StarContainer>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </StarContainer>
  );
};

export default StarRating;

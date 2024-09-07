import styled from "styled-components";

import { useHouses } from "../features/houses/useHouses";
import SingleHouse from "./SingleHouse";

const StyledAllhouse = styled.div`
  display: flex;
  gap: 1rem;
`;

function Allhouses() {
  const { isLoading, houses } = useHouses();

  if (isLoading) return <h1>Loading...🧐</h1>;

  return (
    <StyledAllhouse>
      {houses.map((house) => (
        <SingleHouse house={house} key={house.id} />
      ))}
    </StyledAllhouse>
  );
}

export default Allhouses;

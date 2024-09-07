import styled from "styled-components";

import { useHouses } from "./useHouses";
import HouseRow from "./HouseRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function HouseTable() {
  const { houses, isLoading } = useHouses();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>House</div>
        <div>Price</div>
        <div>Description</div>
        <div></div>
      </TableHeader>
      {houses.map((house) => (
        <HouseRow house={house} key={house.id} />
      ))}
    </Table>
  );
}

export default HouseTable;

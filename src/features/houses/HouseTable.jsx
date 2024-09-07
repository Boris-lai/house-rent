import styled from "styled-components";

import { useHouses } from "./useHouses";
import HouseRow from "./HouseRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

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
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>House</div>
          <div>Price</div>
          <div>Description</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={houses}
          render={(house) => <HouseRow house={house} key={house.id} />}
        />
      </Table>
    </Menus>
  );
}

export default HouseTable;

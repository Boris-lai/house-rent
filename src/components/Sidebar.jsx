import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-0);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <H1>Good Rent</H1>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

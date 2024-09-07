import styled from "styled-components";
import Bg001 from "../images/bg001.png";
import House001 from "../images/house001.jpg";
import { NavLink } from "react-router-dom";

const StyledSectionHouse = styled.section`
  /* margin-top: 6rem; */
  padding: 6.2rem 0 12.4rem 0;
  background-image: url(${Bg001});
  background-size: cover;
  background-position: top;

  /* margin-top: 6rem; */
`;

const StyledHouse = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.6rem;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
  }
`;

const HouseTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 64em) {
    align-items: center;
  }
`;

const H1 = styled.h1`
  color: var(--color-yellow-100);
  font-size: 5rem;
  margin-bottom: 5rem;
  font-weight: 700;
  text-shadow: 1px 1px 8px #333;
  letter-spacing: -0.5px;
`;

const P = styled.p`
  font-size: 1.8rem;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  max-width: 16rem;
  text-align: center;
  margin-top: 1.8rem;
  color: var(--color-grey-100);
  background-color: var(--color-grey-700);
  border-radius: 8px;
  font-size: 2.4rem;
  padding: 1.8rem;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-grey-800);
  }

  @media (max-width: 64em) {
    margin-top: 5rem;
    width: 50%;
  }
`;

const HouseImg = styled.img`
  width: 100%;
  opacity: 0.8;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  @media (max-width: 64em) {
    max-width: 100%;
  }
`;

function SectionHouse() {
  return (
    <StyledSectionHouse>
      <StyledHouse>
        <HouseTextBox>
          <H1>Find Your Perfect Home</H1>
          <P>您尋找完美租屋的信賴夥伴。無論您是想在市中心尋找舒適的公寓，</P>
          <P>
            還是想在寧靜的社區找到寬敞的房屋，我們都有各種適合您需求的物業。
          </P>
          <StyledNavLink>Go!!</StyledNavLink>
        </HouseTextBox>
        <HouseImg src={House001}></HouseImg>
      </StyledHouse>
    </StyledSectionHouse>
  );
}

export default SectionHouse;

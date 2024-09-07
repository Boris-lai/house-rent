import styled from "styled-components";

// import houseimg001 from "../images/houseCard001.jpg";
// import houseimg002 from "../images/houseCard002.jpg";
// import houseimg003 from "../images/houseCard003.jpg";
import { useHouses } from "../features/houses/useHouses";
import HouseCard from "../ui/HouseCard";

const StyledSectionCard = styled.section`
  text-align: center;
`;

const H2 = styled.h2`
  display: inline-block;
  width: 16rem;
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--color-silver-700);
  margin-top: 2.4rem;
  border-bottom: 3px solid #333;
`;

const HouseCards = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  padding: 4.8rem 3.6rem;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 6.4rem;
  row-gap: 3.2rem;

  @media (max-width: 64rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

// const HouseCard = styled.div`
//   box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
//   overflow: hidden;
//   border-radius: 5px;
//   transition: all 0.3s;

//   &:hover {
//     transform: translateY(-0.3rem);
//     box-shadow: 0 0.6rem 1.2rem;
//   }
// `;

// const CardImg = styled.img`
//   width: 100%;
// `;

// const HouseCardContent = styled.div`
//   padding: 3.2rem 4rem 4rem 4rem;
// `;

// const HouseCardTitle = styled.h3`
//   font-size: 2.4rem;
//   color: var(--color-grey-700);
//   font-weight: 600;
//   margin-bottom: 2.4rem;
// `;

function SectionCard() {
  const { houses, isLoading } = useHouses();

  console.log(houses);

  if (isLoading) return <h1>Loading...🧐</h1>;

  return (
    <StyledSectionCard>
      <H2 id="houseCard">出租物件</H2>
      <HouseCards>
        {houses.map((house) => (
          <HouseCard house={house} key={house.id} />
        ))}

        {/* <HouseCard>
          <CardImg src={houseimg001} alt="houseimg001" />
          <HouseCardContent>
            <HouseCardTitle>Lorem ipsum dolor sit amet.</HouseCardTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nihil natus quod ad eaque facere modi ex sint illo assumenda eius
              quae, earum cumque aut quam? Architecto excepturi deleniti in.
            </p>
          </HouseCardContent>
        </HouseCard>
        <HouseCard>
          <CardImg src={houseimg002} alt="houseimg002" />
          <HouseCardContent>
            <HouseCardTitle>Lorem ipsum dolor sit amet.</HouseCardTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nihil natus quod ad eaque facere modi ex sint illo assumenda eius
              quae, earum cumque aut quam? Architecto excepturi deleniti in.
            </p>
          </HouseCardContent>
        </HouseCard>
        <HouseCard>
          <CardImg src={houseimg003} alt="houseimg003" />
          <HouseCardContent>
            <HouseCardTitle>Lorem ipsum dolor sit amet.</HouseCardTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nihil natus quod ad eaque facere modi ex sint illo assumenda eius
              quae, earum cumque aut quam? Architecto excepturi deleniti in.
            </p>
          </HouseCardContent>
        </HouseCard> */}
      </HouseCards>
    </StyledSectionCard>
  );
}

export default SectionCard;

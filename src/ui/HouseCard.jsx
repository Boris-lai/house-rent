import styled from "styled-components";
import Modal from "./Modal";

import CardDetails from "../components/CardDetails";

const StyledHouseCard = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 0.6rem 1.2rem;
  }
`;

const CardImg = styled.img`
  width: 40rem;
  height: 20rem;
  object-fit: fill;
`;

const HouseCardContent = styled.div`
  padding: 1.6rem 3rem 3rem 3rem;
`;

const HouseCardTitle = styled.h3`
  font-size: 2rem;
  color: var(--color-grey-700);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HouseCardPrice = styled.h4`
  font-size: 1.8rem;
  color: var(--color-green-700);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const HouseDescription = styled.div`
  font-size: 1.4rem;
  color: #003566;
`;

function HouseCard({ house }) {
  const { name, images, regularPrice, description } = house;

  return (
    <Modal>
      <Modal.Open opens="card-details">
        <StyledHouseCard>
          <CardImg src={images[0]} />
          <HouseCardContent>
            <HouseCardTitle>{name}</HouseCardTitle>
            <HouseCardPrice>租金：${regularPrice}</HouseCardPrice>
            <HouseDescription>{description}</HouseDescription>
          </HouseCardContent>
        </StyledHouseCard>
      </Modal.Open>

      <Modal.Window name="card-details">
        <CardDetails house={house} />
      </Modal.Window>
    </Modal>
  );
}

export default HouseCard;

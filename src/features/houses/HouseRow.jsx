import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useState } from "react";
import HouseCreateForm from "./HouseCreateForm";
import { useDeleteHouse } from "./useDeleteHouse";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateHouse } from "./useCreateHouse";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const MySwal = withReactContent(Swal);

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const House = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Description = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function HouseRow({ house }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteHouse } = useDeleteHouse();
  const { isCreating, createHouse } = useCreateHouse();

  const { id: houseId, name, regularPrice, description, images } = house;

  function handleDuplicate() {
    createHouse({
      name: `Copy of ${name}`,
      regularPrice,
      description,
      images,
    });
  }

  function deleteHouseConfirm() {
    MySwal.fire({
      title: "確定要刪除此物件嗎？",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "是",
      denyButtonText: "不要",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteHouse(houseId);
      } else if (result.isDenied) {
        // Swal.fire("好喔🤔", "", "info");
      }
    });
  }

  return (
    <Table.Row>
      <Img src={images ? images[0] : ""} />
      <House>{name}</House>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Description>{description}</Description>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={houseId} />

            <Menus.List id={houseId}>
              {/* <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                複製
              </Menus.Button> */}

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>編輯</Menus.Button>
              </Modal.Open>

              <Menus.Button icon={<HiTrash />} onClick={deleteHouseConfirm}>
                刪除
              </Menus.Button>
            </Menus.List>

            {/* ------------------------------------------------------------------- */}
            <Modal.Window name="edit">
              <HouseCreateForm houseToEdit={house} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default HouseRow;

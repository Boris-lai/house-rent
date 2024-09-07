import Button from "../../ui/Button";
import HouseCreateForm from "./HouseCreateForm";
import Modal from "../../ui/Modal";

function AddHouse() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="house-form">
          <Button>新增房屋</Button>
        </Modal.Open>
        <Modal.Window name="house-form">
          <HouseCreateForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// 之前的版本
// function AddHouse() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>新增房屋</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <HouseCreateForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddHouse;

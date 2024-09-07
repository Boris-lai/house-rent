import Heading from "../ui/Heading";
import Row from "../ui/Row";
import HouseTable from "../features/houses/HouseTable";
import AddHouse from "../features/houses/AddHouse";

function Houses() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">所有物件</Heading>
        {/* <p>Filter / Sort</p> */}
      </Row>
      <Row>
        <HouseTable />

        <AddHouse />
      </Row>
    </>
  );
}

export default Houses;

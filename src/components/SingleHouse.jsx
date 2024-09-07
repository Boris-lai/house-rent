import { Link, useParams } from "react-router-dom";

function SingleHouse({ house }) {
  //   const {} = useParams();

  const { id, name } = house;

  return <Link to={`/rentHouse/${id}`}>{name}</Link>;
}

export default SingleHouse;

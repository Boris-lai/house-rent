import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import Empty from "../ui/Empty";

function RentHouse() {
  const { houseId } = useParams();
  const [house, setHouse] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleHouse = async () => {
      const { data, error } = await supabase
        .from("houses")
        .select()
        .eq("id", houseId)
        .single();

      if (error) {
        setHouse(null);
        setLoading(false);
        return;
      }

      if (data) {
        setHouse(data);
        setLoading(false);
      }
    };
    fetchSingleHouse();
  }, [houseId]);

  if (house === null) return <Empty />;

  return (
    <>{(isLoading && <h1>Loading...😎</h1>) || <h1>{house.description}</h1>}</>
  );
}

export default RentHouse;

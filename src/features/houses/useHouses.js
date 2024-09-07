import { useQuery } from "@tanstack/react-query";
import { getHouses } from "../../services/apiHouses";

export function useHouses() {
  const {
    isLoading,
    data: houses,
    error,
  } = useQuery({
    queryKey: ["Houses"],
    queryFn: getHouses,
  });

  return { isLoading, error, houses };
}

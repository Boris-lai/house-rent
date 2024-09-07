import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { createEditHouse } from "../../services/apiHouses";

export function useCreateHouse() {
  const queryClient = useQueryClient();

  const { mutate: createHouse, isLoading: isCreating } = useMutation({
    mutationFn: (newHouse) => createEditHouse(newHouse),
    onSuccess: () => {
      Swal.fire({
        title: "房屋創建成功!",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["Houses"] });
    },
    onError: (err) =>
      Swal.fire({
        icon: "Error",
        title: "Oops...",
        text: err,
      }),
  });

  return { isCreating, createHouse };
}

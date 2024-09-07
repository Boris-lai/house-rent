import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditHouse } from "../../services/apiHouses";

import Swal from "sweetalert2";

export function useEditHouse() {
  const queryClient = useQueryClient();

  const { mutate: editHouse, isLoading: isEditing } = useMutation({
    mutationFn: ({ newHouseData, id }) => createEditHouse(newHouseData, id),
    onSuccess: () => {
      Swal.fire({
        title: "房屋修改成功!",
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

  return { isEditing, editHouse };
}

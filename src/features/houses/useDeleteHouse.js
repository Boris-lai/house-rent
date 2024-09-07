import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHouse as deleteHouseApi } from "../../services/apiHouses";

const MySwal = withReactContent(Swal);

export function useDeleteHouse() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteHouse } = useMutation({
    mutationFn: (id) => deleteHouseApi(id),
    onSuccess: () => {
      MySwal.fire("成功刪除房屋囉!");
      queryClient.invalidateQueries({
        queryKey: ["Houses"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return { isDeleting, deleteHouse };
}

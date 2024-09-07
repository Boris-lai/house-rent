import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

const MySwal = withReactContent(Swal);

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      MySwal.fire({
        text: "註冊成功",
        icon: "success",
      });
    },
  });

  return { signup, isLoading };
}

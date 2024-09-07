import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="姓名" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "這欄位是必須的" })}
        />
      </FormRow>
      <FormRow label="信箱" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "這欄位是必須的",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "請提供有效的信箱地址",
            },
          })}
        />
      </FormRow>
      <FormRow label="密碼" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "這欄位是必須的",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="確認密碼" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "這欄位是必須的",
            validate: (value) => value === getValues().password || "密碼不一致",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variations="secondary" type="reset" disabled={isLoading}>
          取消
        </Button>
        <Button disabled={isLoading}>創建</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;

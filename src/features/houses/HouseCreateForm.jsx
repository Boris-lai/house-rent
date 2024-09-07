import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";

import { useCreateHouse } from "./useCreateHouse";
import { useEditHouse } from "./useEditHouse";

function HouseCreateForm({ houseToEdit = {}, onCloseModal }) {
  const { isCreating, createHouse } = useCreateHouse();
  const { isEditing, editHouse } = useEditHouse();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValue } = houseToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const images =
      typeof data.images === "string" ? data.images[0] : data.images;

    if (isEditSession)
      editHouse(
        { newHouseData: { ...data, images }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createHouse(
        { ...data, images: images },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );

    // console.log(data);
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="房屋名稱" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "請輸入房屋名稱",
          })}
        />
      </FormRow>
      <FormRow label="租金價格" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "請輸入租金價格",
          })}
        />
      </FormRow>
      <FormRow label="備註" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "請輸入房屋描述",
          })}
        />
      </FormRow>
      <FormRow label="上傳相片">
        <FileInput
          id="images"
          accept="image/*"
          max="3"
          multiple
          {...register("images", {
            required: isEditSession ? false : "至少放一張照片",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variations="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          取消
        </Button>
        <Button disabled={isCreating}>
          {isEditSession ? "編輯房屋" : "創建房屋"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default HouseCreateForm;

/*
    useForm :
    Step 1 先在要輸入的表單欄位使用 "register"
    Step 2 <Form> submit
    Step 3 onError 觸發欄位錯誤的函式
    Step 4 formState 取得當前 form 裡面的 state
*/

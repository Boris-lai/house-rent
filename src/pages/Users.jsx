import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">創建使用者帳戶</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;

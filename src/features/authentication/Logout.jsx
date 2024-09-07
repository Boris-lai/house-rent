import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const LogoutIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.6rem;
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <LogoutIcon>
      <p>登出</p>
      <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon>
    </LogoutIcon>
  );
}

export default Logout;

import styled from "styled-components";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #374151;
  color: #fff;

  height: 6rem;
  padding: 0 4.8rem;

  position: relative;

  img {
    height: 4.2rem;
  }
`;

const MainNav = styled.nav``;

const MainNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  padding: 1rem;
  background-color: #333;
  min-width: 12rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const Dropdown = styled.li`
  position: relative;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &:hover ${DropdownMenu} {
    display: block;
  }
`;

const MainNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.5s;

  &:hover {
    color: #faedcd;
  }
`;

const Alink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.5s;

  &:hover {
    color: #faedcd;
  }
`;

function Header() {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        setSticky("sticky");
      } else {
        setSticky("");
      }
    });
  }, []);

  return (
    <StyledHeader className={sticky}>
      <Link to="/">
        <img src={logo} />
      </Link>
      <MainNav>
        <MainNavList>
          <li>
            <Alink to="#feature">關於Good Rent</Alink>
          </li>
          {/* <Dropdown>
            
            <DropdownMenu>
              <li>
                <MainNavLink>怎麼做</MainNavLink>
              </li>
              <li>
                <MainNavLink>如何做</MainNavLink>
              </li>
              <li>
                <MainNavLink>這樣做</MainNavLink>
              </li>
            </DropdownMenu>
          </Dropdown> */}
          <li>
            <Alink href="#houseCard">出租物件</Alink>
          </li>
          <li>
            <Alink href="#qaquetion">常見問題 Q&A</Alink>
          </li>
        </MainNavList>
      </MainNav>
    </StyledHeader>
  );
}

export default Header;

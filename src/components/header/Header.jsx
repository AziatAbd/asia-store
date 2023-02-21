import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <nav>
          <div>
            <Logo to="/">
              <img
                src="https://asiastore.kg/image/catalog/logos2.webp"
                alt="imgLogo"
              />
            </Logo>
          </div>
          <div>
            <NavList>
              <DropDown>
                <DropdownLi to="/apple-mac/mac">Mac</DropdownLi>
                <DropContent>
                  <DropLink to="apple-mac/about/1">mac-studio</DropLink>
                  <DropLink to="apple-mac/about/2">mac-screen</DropLink>
                  <DropLink to="apple-mac/about/3">mac-mini</DropLink>
                  <DropLink to="apple-mac/about/4">i-mac</DropLink>
                  <DropLink to="apple-mac/about/5">macbook-pro</DropLink>
                  <DropLink to="apple-mac/about/6"> macbook-air</DropLink>
                </DropContent>
              </DropDown>
              <li>Iphone</li>
              <li>Ipad</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>Garmin</li>
              <li>Accessories</li>
              <li>JBL</li>
              <li>Beats</li>
              <li>Gadgets</li>
              <YandexLi>Яндекс</YandexLi>
            </NavList>
          </div>
        </nav>
      </StyledHeader>
    </Container>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #231f20;
  padding: 20px 0;
  color: white;
  display: flex;
  justify-content: space-between;
  /* position: fixed; */
  width: 100%;
  /* z-index: 2; */
`;
const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 10rem;
    margin-right: 10rem;
  }
`;

const Logo = styled(NavLink)`
  img {
    width: 15rem;
  }
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  color: grey;
  justify-content: flex-end;
  width: 100%;
  li {
    cursor: pointer;
    margin-top: 0.5rem;
    margin-left: 2rem;
    font-size: 1.1rem;
  }
  li:hover {
    color: orange;
  }
`;

const YandexLi = styled.li`
  cursor: pointer;
  color: orange;
  margin-top: 0.5rem;
  margin-left: 2rem;
  font-size: 1.1rem;
  li:hover {
    color: orange;
  }
`;

const DropdownLi = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  cursor: pointer;
  color: orange;
  margin-top: 0.5rem;
  margin-left: 2rem;
  font-size: 1.1rem;
  li:hover {
    color: orange;
  }
`;

const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  :hover {
    ${DropContent} {
      display: block;
    }
  }
`;

const DropLink = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  :hover {
    background-color: #ddd;
    color: orange;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderTag>
      <LinkDiv>
        <NavLink to="/">MAIN PAGE</NavLink>
        <NavLink to="/bag"> BAG</NavLink>
        <NavLink to="/orders">ORDER</NavLink>
      </LinkDiv>
    </HeaderTag>
  );
}

export default Header;

const HeaderTag = styled.header`
  padding: 50px;
  background-color: grey;
  color: white;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`;
const LinkDiv = styled.div`
display:flex,
flex-direction:column
gap:40px`;
const NavLink = styled(Link)``;

import styled from "styled-components";
import icon from "../assets/logo/logo.png";

const NavStyle = styled.div`
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100%;
`;

const Logo = styled.img`
    width: 64px;
`;

function Nav() {
    return (
        <NavStyle>
            <Logo src={icon} />
        </NavStyle>
    );
}

export default Nav;

import styled from "styled-components";

import { useLocation } from "react-router-dom";
import icon from "../assets/logo/logo.png";
import { CreateGroupButton } from "../components/Button";

const NavStyle = styled.div`
    display: flex;

    left: 0;
    top: 0;

    justify-content: center;
    align-items: center;

    margin-top: 50px;

    height: 64px;
    width: 1620px;
`;

const Logo = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: 64px;
`;

const Button = styled.div`
    margin-left: auto;
`;

function Nav() {
    const location = useLocation();

    return (
        <NavStyle>
            <Logo src={icon} />
            {location.pathname === "/group-list" && (
                <Button>
                    <CreateGroupButton />
                </Button>
            )}
        </NavStyle>
    );
}

export default Nav;

import styled from "styled-components";

const Button = styled.button`
    justify-content: center;
    align-content: center;

    width: 400px;
    height: 50px;

    color: var(--white);
    font-weight: 500;
    font-size: 16px;
`;

function CreateGroupButton() {
    return <Button style={{ width: "200px" }}>그룹 만들기</Button>;
}

function MaxButton() {
    return <Button>만들기</Button>;
}

export { CreateGroupButton, MaxButton };

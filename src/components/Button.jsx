import styled from "styled-components";

const Button = styled.button`
    justify-content: center;
    align-content: center;

    width: 400px;
    height: 50px;

    background-color: var(--black);
    border: none;
    border-radius: 6px;

    color: var(--white);
    font-weight: bold;
    font-size: 16px;

    cursor: pointer;
`;

function CreateGroupButton() {
    return <Button style={{ width: "200px" }}>그룹 만들기</Button>;
}

function CreateMemoryButton() {
    return <Button style={{ width: "200px" }}>추억 보내기</Button>;
}

function PostCommentButton() {
    return <Button>댓글 등록하기</Button>;
}

export { CreateGroupButton, CreateMemoryButton, PostCommentButton };

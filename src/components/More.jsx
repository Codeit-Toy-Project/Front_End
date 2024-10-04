import styled from "styled-components";

const MoreBox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1560px;
    height: 60px;

    background-color: var(--gray50);
    border-radius: 6px;
    border: 1.5px solid var(--black);

    margin: 50px;

    font-size: 14px;
    font-weight: bold;

    cursor: pointer;
`;

export default function More() {
    return <MoreBox>더보기</MoreBox>;
}

import React from "react";
import styled from "styled-components";
import Icon from "../../src/assets/favicon/favicon32_32.png";

// 공감 보내기 버튼 컴포넌트
const EmpathyButton = () => {
    return (
        <ButtonContainer>
            <ButtonIcon src={Icon} alt="empathy icon" />
            <ButtonText>공감 보내기</ButtonText>
        </ButtonContainer>
    );
};

export default EmpathyButton;

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 50px;

    background-color: var(--gray50);
    border-radius: 6px;
    border: 2px solid var(--black);

    gap: 10px;

    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const ButtonIcon = styled.img`
    width: 22px;
`;

const ButtonText = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`;

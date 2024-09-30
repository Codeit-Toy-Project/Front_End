import React from "react";
import styled from "styled-components";
import empathyIcon from '../../src/assets/favicon/favicon32_32.png';

// 공감 보내기 버튼 컴포넌트
const EmpathyButton = ({ text, icon }) => {
  return (
    <ButtonContainer>
      <ButtonIcon src={icon} alt="empathy icon" />
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

export default EmpathyButton;



const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #282828;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
`;

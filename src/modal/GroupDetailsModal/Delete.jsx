import React, { useState } from "react";
import styled from "styled-components";

const DeleteModal = ({ onClose }) => {
  const [groupPassword, setGroupPassword] = useState("");

  const handleDelete = () => {
    console.log({
      groupPassword,
    });
    onClose(); 
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <HeaderText>그룹 삭제</HeaderText>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>삭제 권한 인증</Label>
          <Input
            type="password"
            value={groupPassword}
            onChange={(e) => setGroupPassword(e.target.value)}
            placeholder="그룹 비밀번호를 입력해 주세요."
          />
          <SubmitButton onClick={handleDelete}>삭제하기</SubmitButton>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DeleteModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: white;
  width: 20%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.div`
  text-align: center;
  color: #282828;
  font-size: 22px;
  font-weight: bold;
  margin-left: 37%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #505050; 
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &::placeholder {
    color: #999;
    font-weight: bold;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10%;
  margin-bottom: 3%;

  &:hover {
    background-color: #3b3b3b;
  }
`;

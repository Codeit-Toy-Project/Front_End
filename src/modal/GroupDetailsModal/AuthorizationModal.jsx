import React, { useState } from "react";
import styled from "styled-components";

const AuthorizationModal = ({ onClose, onSubmit }) => {
    const [groupPassword, setGroupPassword] = useState("");

    const handleSubmit = () => {
        onSubmit(groupPassword); // 그룹 비밀번호 전송
        onClose();
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <HeaderText>올리기 권한 인증</HeaderText>
                    <CloseButton onClick={onClose}>X</CloseButton>
                </ModalHeader>
                <ModalBody>
                    <Label>그룹 비밀번호</Label>
                    <Input
                        type="password"
                        value={groupPassword}
                        onChange={(e) => setGroupPassword(e.target.value)}
                        placeholder="그룹 비밀번호를 입력해 주세요"
                    />
                    <SubmitButton onClick={handleSubmit}>인증 후 올리기</SubmitButton>
                </ModalBody>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default AuthorizationModal;


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
    width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

const HeaderText = styled.h2`
    font-size: 24px;
    color: #282828;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
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
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    &::placeholder {
        color: #b0b0b0;
    }
    
`;

const SubmitButton = styled.button`
    padding: 12px;
    width: 45%;
    margin-left: 25%;
    background-color: #282828;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #474747;
    }
    text-align: center;
`;

import React, { useState } from "react";
import styled from "styled-components";

const Modify = ({ onClose, isPublicInitial }) => {
  const [groupName, setGroupName] = useState("");
  const [groupImage, setGroupImage] = useState(null);
  const [groupDescription, setGroupDescription] = useState("");
  const [groupPassword, setGroupPassword] = useState("");
  const [isPublic, setIsPublic] = useState(isPublicInitial); // 공개 여부 초기값 설정

  const handleImageChange = (e) => {
    setGroupImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    //TODO: - 그룹 수정 로직 추가
    console.log({
      groupName,
      groupImage,
      groupDescription,
      isPublic,
      groupPassword,
    });
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <HeaderText>그룹 정보 수정</HeaderText>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>그룹명</Label>
          <Input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <Label>대표이미지</Label>
          <ImageWrapper>
            <FileName>{groupImage ? groupImage.name : "선택된 이미지가 없습니다"}</FileName>
            <FileButton htmlFor="file-upload">파일 선택</FileButton>
            <InputFile
              id="file-upload"
              type="file"
              onChange={handleImageChange}
            />
          </ImageWrapper>

          <Label>그룹 소개</Label>
          <Textarea
           placeholder="그룹을 소개해 주세요."
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
          />

          <Label>그룹 공개 여부</Label>
          <ToggleContainer>
            <ToggleWrapper isPublic={isPublic} onClick={() => setIsPublic(!isPublic)}>
              <ToggleButton isPublic={isPublic} />
            </ToggleWrapper>
            <ToggleText>공개</ToggleText>
          </ToggleContainer>

          <Label>수정 권한 인증 (비밀번호)</Label>
          <Input
            type="password"
            value={groupPassword}
            onChange={(e) => setGroupPassword(e.target.value)}
            placeholder="그룹 비밀번호를 입력해 주세요."
          />

          <SubmitButton onClick={handleSubmit}>수정하기</SubmitButton>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modify;

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

const HeaderText = styled.div`
  text-align: center;
  color: #282828;
  font-size: 24px; 
  font-weight: bold; 
  margin-left: 33%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const InputFile = styled.input`
  display: none; 
`;

const FileButton = styled.label`
  padding: 8px 16px;
  background-color: #ffffff;
  color: black;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  border: 1px solid #282828;
  &:hover {
    background-color: #d6d6d6;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

`;

const FileName = styled.span`
  padding: 8px 16px;
  flex-grow: 1;
  align-self: center;
  font-size: 14px;
  color: #555;
  margin-right: 10px;
  border: 1px solid #000000;
`;

const Textarea = styled.textarea`
  padding: 13px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
  
  &::placeholder {
    color: #999;
    font-weight: bold;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleWrapper = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.isPublic ? "#cfcfcf" : "black")};
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isPublic ? "26px" : "2px")};
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
`;

const ToggleText = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #282828;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 3%;
  &:hover {
    background-color: #3b3b3b;
  }
`; 

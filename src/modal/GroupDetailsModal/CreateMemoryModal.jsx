import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MemoryContext } from "../../context/MemoryContext";
import AuthorizationModal from "./AuthorizationModal";

const CreateMemoryModal = ({ onClose }) => {
    const { currentMemory, updateMemory, submitMemory } = useContext(MemoryContext); // Context API 사용
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleTagKeyDown = (e) => {
        if (e.key === "Enter" && !currentMemory.tags.includes(e.target.value.trim())) {
            updateMemory("tags", [...currentMemory.tags, e.target.value.trim()]);
        }
    };

    const handleAuthSubmit = (groupPassword) => {
        submitMemory(groupPassword); // 서버로 데이터 전송
        onClose();
    };

    return (
        <>
            <ModalOverlay>
                <ModalContainer>
                    <ModalHeader>
                        <HeaderText>추억 올리기</HeaderText>
                        <CloseButton onClick={onClose}>X</CloseButton>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Column>
                                <FieldBox>
                                    <Label>닉네임</Label>
                                    <Input
                                        type="text"
                                        value={currentMemory.nickname}
                                        onChange={(e) =>
                                            updateMemory("nickname", e.target.value)
                                        }
                                        placeholder="닉네임을 입력해 주세요."
                                    />
                                </FieldBox>

                                <FieldBox>
                                    <Label>제목</Label>
                                    <Input
                                        type="text"
                                        value={currentMemory.title}
                                        onChange={(e) =>
                                            updateMemory("title", e.target.value)
                                        }
                                         placeholder="제목을 입력해 주세요."
                                    />
                                </FieldBox>

                                <FieldBox>
                                    <Label>이미지</Label>
                                    <ImageWrapper>
                                        <FileName>
                                            {currentMemory.imageUrl
                                                ? currentMemory.imageUrl.name
                                                : "파일을 선택해 주세요"}
                                        </FileName>
                                        <FileButton htmlFor="file-upload">
                                            파일 선택
                                        </FileButton>
                                        <InputFile
                                            id="file-upload"
                                            type="file"
                                            onChange={(e) =>
                                                updateMemory("imageUrl", e.target.files[0])
                                            }
                                        />
                                    </ImageWrapper>
                                </FieldBox>

                                <FieldBox>
                                    <Label>본문</Label>
                                    <Textarea
                                        placeholder="본문 내용을 입력해 주세요"
                                        value={currentMemory.content}
                                        onChange={(e) =>
                                            updateMemory("content", e.target.value)
                                        }
                                    />
                                </FieldBox>
                            </Column>

                            {/* 두 번째 줄 */}
                            <Column>
                                <FieldBox>
                                    <Label>태그</Label>
                                    <Input
                                        type="text"
                                        value={currentMemory.inputTag}
                                        onKeyDown={handleTagKeyDown}
                                        placeholder="태그를 입력 후 엔터를 누르세요"
                                    />
                                    <TagContainer>
                                        {currentMemory.tags.map((tag, index) => (
                                            <Tag key={index}>
                                                #{tag}
                                                <RemoveTagButton
                                                    onClick={() => {
                                                        updateMemory(
                                                            "tags",
                                                            currentMemory.tags.filter(
                                                                (t) => t !== tag
                                                            )
                                                        );
                                                    }}
                                                >
                                                    X
                                                </RemoveTagButton>
                                            </Tag>
                                        ))}
                                    </TagContainer>
                                </FieldBox>

                                <FieldBox>
                                    <Label>장소</Label>
                                    <Input
                                        type="text"
                                        value={currentMemory.location}
                                        onChange={(e) =>
                                            updateMemory("location", e.target.value)
                                        }
                                         placeholder="장소를 입력해 주세요."
                                    />
                                </FieldBox>

                                <FieldBox>
                                    <Label>추억의 순간</Label>
                                    <Input
                                        type="date"
                                        value={currentMemory.moment}
                                        onChange={(e) =>
                                            updateMemory("moment", e.target.value)
                                        }
                                         placeholder="YYYY-MM-DD"
                                    />
                                </FieldBox>

                                <FieldBox>
                                    <Label>추억 공개 여부</Label>
                                    <ToggleContainer>
                                        <ToggleWrapper
                                            isPublic={currentMemory.isPublic}
                                            onClick={() =>
                                                updateMemory("isPublic", !currentMemory.isPublic)
                                            }
                                            
                                        >
                                            <ToggleButton isPublic={currentMemory.isPublic} />
                                        </ToggleWrapper>
                                        <ToggleText>
                                            {currentMemory.isPublic ? "공개" : "비공개"}
                                        </ToggleText>
                                    </ToggleContainer>
                                </FieldBox>
                                <FieldBox>
                                    <Label>비밀번호 생성</Label>
                                    <Input
                                        type="password"
                                        value={currentMemory.postPassword}
                                        onChange={(e) =>
                                            updateMemory("postPassword", e.target.value)
                                        }
                                        placeholder="추억 비밀번호를 생성해 주세요."
                                    />
                                </FieldBox>
                            </Column>
                        </Row>

                        <SubmitButton onClick={() => setIsAuthModalOpen(true)}>
                            올리기
                        </SubmitButton>
                    </ModalBody>
                </ModalContainer>
            </ModalOverlay>

            {isAuthModalOpen && (
                <AuthorizationModal
                    onClose={() => setIsAuthModalOpen(false)}
                    onSubmit={handleAuthSubmit}
                />
            )}
        </>
    );
};

export default CreateMemoryModal;

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
    width: 800px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderText = styled.h2`
    margin: 15px;    
    margin-left: 40%;
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
    gap: 20px;
`;

const Row = styled.div`
    display: flex;
    gap: 40px;
`;

const Column = styled.div`
    flex: 1;
`;

const FieldBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 100px;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const FileButton = styled.label`
    padding: 8px 16px;
    background-color: #282828;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #555555;
    }
`;

const InputFile = styled.input`
    display: none;
`;

const FileName = styled.span`
    margin-right: 10px;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 5px;
`;

const Tag = styled.div`
    background-color: #e0e0e0;
    padding: 5px 10px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const RemoveTagButton = styled.button`
    background: none;
    border: none;
    font-size: 12px;
    margin-left: 5px;
    cursor: pointer;
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const ToggleWrapper = styled.div`
    width: 50px;
    height: 25px;
    background-color: ${(props) => (props.isPublic ? "#4CAF50" : "#ccc")};
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
    font-weight: bold;
    font-size: 14px;
    color: #282828;
`;

const SubmitButton = styled.button`
    padding: 10px;
    margin: 10px;
    width: 30%;
    margin-left: 33%;
    background-color: #282828;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #555555;
    }
`;

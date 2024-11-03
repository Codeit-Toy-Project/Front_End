import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
                        <FileName>
                            {groupImage
                                ? groupImage.name
                                : "선택된 이미지가 없습니다"}
                        </FileName>
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
                        <ToggleWrapper
                            isPublic={isPublic}
                            onClick={() => setIsPublic(!isPublic)}
                        >
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

// ----------------------------------------------------------------------

const CreateGroup = () => {
    const navigate = useNavigate();

    const [groupName, setGroupName] = useState("");
    const [groupImage, setGroupImage] = useState(null);
    const [groupDescription, setGroupDescription] = useState("");
    const [groupPassword, setGroupPassword] = useState("");
    const [isPublic, setIsPublic] = useState(true); // 공개 여부 초기값 설정

    const handleImageChange = (e) => {
        setGroupImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/groups", {
                name: groupName,
                password: groupPassword,
                imageUrl: groupImage,
                isPublic,
                badges: [],
                introduction: groupDescription,
            });
            console.log("그룹 생성 성공:", response.data);
            navigate("/group-list");
        } catch (error) {
            console.error(
                "그룹 생성 실패:",
                error.response ? error.response.data : error.message
            );
        }
    };

    const resetForm = () => {
        setGroupName("");
        setGroupImage(null);
        setGroupDescription("");
        setGroupPassword("");
        setIsPublic(true);
    };

    return (
        <>
            <Body>
                <HeaderText>그룹 만들기</HeaderText>

                <FieldBox>
                    <Label>그룹명</Label>
                    <Input
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                </FieldBox>

                <FieldBox>
                    <Label>대표이미지</Label>
                    <ImageWrapper>
                        <FileName>
                            {groupImage
                                ? groupImage.name
                                : "파일을 선택해 주세요"}
                        </FileName>
                        <FileButton htmlFor="file-upload">파일 선택</FileButton>
                        <InputFile
                            id="file-upload"
                            type="file"
                            onChange={handleImageChange}
                        />
                    </ImageWrapper>
                </FieldBox>

                <FieldBox>
                    <Label>그룹 소개</Label>
                    <Textarea
                        placeholder="그룹을 소개해 주세요."
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}
                    />
                </FieldBox>

                <FieldBox>
                    <Label>그룹 공개 여부</Label>
                    <ToggleContainer>
                        <ToggleText>공개</ToggleText>
                        <ToggleWrapper
                            isPublic={isPublic}
                            onClick={() => setIsPublic(!isPublic)}
                        >
                            <ToggleButton isPublic={isPublic} />
                        </ToggleWrapper>
                    </ToggleContainer>
                </FieldBox>

                <FieldBox>
                    <Label>비밀번호 생성</Label>
                    <Input
                        type="password"
                        value={groupPassword}
                        onChange={(e) => setGroupPassword(e.target.value)}
                        placeholder="그룹 비밀번호를 생성해 주세요."
                        style={{ "font-family": "Spoqa Han Sans Neo" }}
                    />
                </FieldBox>

                <SubmitButton onClick={handleSubmit}>만들기</SubmitButton>
            </Body>
        </>
    );
};

const CreateMemory = () => {
    const [memoryName, setMemoryName] = useState("");
    const [memoryTitle, setMemoryTitle] = useState("");
    const [memoryImage, setGroupImage] = useState(null);
    const [memoryDescription, setmemoryDescription] = useState("");

    const [inputTag, setInputTag] = useState("");
    const [memoryTag, setMemoryTag] = useState([]);
    const [memoryLocation, setMemoryLocation] = useState("");
    const [memoryDate, setMemoryDate] = useState("");

    const [memoryPassword, setMemoryPassword] = useState("");
    const [isPublic, setIsPublic] = useState(true); // 공개 여부 초기값 설정

    const handleImageChange = (e) => {
        setGroupImage(e.target.files[0]);
    };

    const handleSubmit = () => {
        //TODO: - 그룹 수정 로직 추가
        console.log({
            memoryName: memoryName,
            memoryImage: memoryImage,
            memoryDescription: memoryDescription,
            memoryTag: memoryTag,
            memoryLocation: memoryLocation,
            memoryDate: memoryDate,
            memoryPassword: memoryPassword,
            isPublic,
        });
        resetForm();
    };

    const resetForm = () => {
        setMemoryName("");
        setGroupImage(null);
        setmemoryDescription("");
        setMemoryTag([]);
        setMemoryLocation("");
        setMemoryDate("");
        setMemoryPassword("");
        setIsPublic(true);
    };

    const addTag = () => {
        if (inputTag.trim() !== "" && !memoryTag.includes(inputTag.trim())) {
            setMemoryTag((prevTags) => [...prevTags, inputTag.trim()]);
            setInputTag("");
        }
        console.log(memoryTag);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTag();
        }
    };

    return (
        <>
            <SectionBody>
                <HeaderText style={{ textAlign: "center" }}>
                    추억 올리기
                </HeaderText>
                <Section>
                    <Body>
                        <FieldBox>
                            <Label>닉네임</Label>
                            <Input
                                type="text"
                                value={memoryName}
                                onChange={(e) => setMemoryName(e.target.value)}
                            />
                        </FieldBox>

                        <FieldBox>
                            <Label>제목</Label>
                            <Input
                                type="text"
                                value={memoryTitle}
                                onChange={(e) => setMemoryTitle(e.target.value)}
                            />
                        </FieldBox>

                        <FieldBox>
                            <Label>이미지</Label>
                            <ImageWrapper>
                                <FileName>
                                    {memoryImage
                                        ? memoryImage.name
                                        : "파일을 선택해 주세요"}
                                </FileName>
                                <FileButton htmlFor="file-upload">
                                    파일 선택
                                </FileButton>
                                <InputFile
                                    id="file-upload"
                                    type="file"
                                    onChange={handleImageChange}
                                />
                            </ImageWrapper>
                        </FieldBox>

                        <FieldBox>
                            <Label>본문</Label>
                            <Textarea
                                placeholder="본문 내용을 입력해 주세요"
                                value={memoryDescription}
                                onChange={(e) =>
                                    setmemoryDescription(e.target.value)
                                }
                            />
                        </FieldBox>
                    </Body>

                    <Body>
                        <FieldBox>
                            <Label>태그</Label>
                            <Input
                                type="text"
                                value={inputTag}
                                onChange={(e) => setInputTag(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <TagField>
                                {memoryTag.map((tag) => `#${tag}`).join(" ")}
                            </TagField>
                        </FieldBox>

                        <FieldBox>
                            <Label>장소</Label>
                            <Input
                                type="text"
                                value={memoryLocation}
                                onChange={(e) =>
                                    setMemoryLocation(e.target.value)
                                }
                            />
                        </FieldBox>

                        <FieldBox>
                            <Label>추억의 순간</Label>
                            <Input
                                htmlFor="date"
                                type="date"
                                value={memoryDate}
                                onChange={(e) => setMemoryDate(e.target.value)}
                                style={{ fontFamily: "Spoqa Han Sans Neo" }}
                            />
                        </FieldBox>

                        <FieldBox>
                            <Label>그룹 공개 여부</Label>
                            <ToggleContainer>
                                <ToggleText>공개</ToggleText>
                                <ToggleWrapper
                                    isPublic={isPublic}
                                    onClick={() => setIsPublic(!isPublic)}
                                >
                                    <ToggleButton isPublic={isPublic} />
                                </ToggleWrapper>
                            </ToggleContainer>
                        </FieldBox>

                        <FieldBox>
                            <Label>비밀번호 생성</Label>
                            <Input
                                type="password"
                                value={memoryPassword}
                                onChange={(e) =>
                                    setMemoryPassword(e.target.value)
                                }
                                placeholder="추억 비밀번호를 생성해 주세요."
                                style={{ "font-family": "Spoqa Han Sans Neo" }}
                            />
                        </FieldBox>
                    </Body>
                </Section>
                <SubmitButton style={{ width: "400px" }} onClick={handleSubmit}>
                    올리기
                </SubmitButton>
            </SectionBody>
        </>
    );
};

const Section = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`;

const TagField = styled.div`
    display: flex;
    align-items: inline-start;
    height: 20px;
    overflow: hidden;

    font-size: 14px;
`;

// ----------------------------------------------------------------------

const AccessPriavteGroup = () => {
    const [groupPassword, setGroupPassword] = useState("");

    const handleSubmit = (e) => {};

    return (
        <>
            <Body style={{ marginTop: "100px" }}>
                <HeaderText>비공개 그룹</HeaderText>

                <Desc>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다</Desc>

                <FieldBox>
                    <Label>비밀번호 입력</Label>
                    <Input
                        type="password"
                        value={groupPassword}
                        onChange={(e) => setGroupPassword(e.target.value)}
                        placeholder="그룹 비밀번호를 입력해 주세요."
                        style={{ "font-family": "Spoqa Han Sans Neo" }}
                    />
                </FieldBox>

                <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
            </Body>
        </>
    );
};

// ----------------------------------------------------------------------

const AccessPriavteMemory = () => {
    const [groupPassword, setGroupPassword] = useState("");

    const handleSubmit = (e) => {};

    return (
        <>
            <Body style={{ marginTop: "100px" }}>
                <HeaderText>비공개 추억</HeaderText>

                <Desc>비공개 추억에 접근하기 위해 권한 확인이 필요합니다</Desc>

                <FieldBox>
                    <Label>비밀번호 입력</Label>
                    <Input
                        type="password"
                        value={groupPassword}
                        onChange={(e) => setGroupPassword(e.target.value)}
                        placeholder="추억 비밀번호를 입력해 주세요."
                        style={{ "font-family": "Spoqa Han Sans Neo" }}
                    />
                </FieldBox>

                <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
            </Body>
        </>
    );
};

export {
    Modify,
    CreateGroup,
    CreateMemory,
    AccessPriavteGroup,
    AccessPriavteMemory,
};

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 400px;

    gap: 35px;
`;

const SectionBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 900px;

    gap: 35px;
`;

const FieldBox = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    gap: 5px;
`;

const Desc = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
`;

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
    color: #282828;
    font-size: 24px;
    font-weight: bold;
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

    background-color: var(--white);

    &::placeholder {
        color: var(--gray400);
    }
`;

const InputFile = styled.input`
    display: none;
`;

const FileButton = styled.label`
    padding: 8px 16px;
    color: black;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    border: 1px solid var(--gray200);
    &:hover {
        background-color: #d6d6d6;
    }

    background-color: var(--white);
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;
    color: var(--gray400);
`;

const FileName = styled.span`
    padding: 8px 16px;
    flex-grow: 1;
    align-self: center;

    margin-right: 10px;
    border: 1px solid var(--gray200);
    border-radius: 6px;

    background-color: var(--white);
`;

const Textarea = styled.textarea`
    padding: 14px;

    border: 1.5px solid #ccc;
    border-radius: 6px;
    height: 100px;

    background-color: var(--white);

    font-family: "Spoqa Han Sans Neo";

    &::placeholder {
        color: var(--gray400);
    }
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
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
    font-weight: bold;
    font-size: 14px;
    color: #282828;
`;

const SubmitButton = styled.button`
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 3%;
    &:hover {
        background-color: #3b3b3b;
    }
`;

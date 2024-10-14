import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CreateMemoryModal from "../modal/GroupDetailsModal/CreateMemoryModal"

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
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/create-group");
    };

    return (
        <Button style={{ width: "200px" }} onClick={handleClick}>
            그룹 만들기
        </Button>
    );
}

function CreateMemoryButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true); // 버튼 클릭 시 모달 열림
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기 함수
    };

    return (
        <>
            <Button style={{ width: "200px" }} onClick={handleClick}>
                추억 올리기
            </Button>

            {isModalOpen && <CreateMemoryModal onClose={handleCloseModal} />} {/* 모달 표시 */}
        </>
    );
}

function PostCommentButton() {
    return <Button>댓글 등록하기</Button>;
}

export { CreateGroupButton, CreateMemoryButton, PostCommentButton };

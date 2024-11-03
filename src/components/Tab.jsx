import { useState } from "react"; // useState import 추가
import styled from "styled-components";

const TabContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Tab = styled.button`
    width: 66px;
    height: 45px;

    border: none;
    border-radius: 22.5px;

    font-size: 14px;
    font-weight: bold;

    background-color: ${({ isActive }) =>
        isActive ? "var(--black)" : "var(--gray50)"};
    color: ${({ isActive }) => (isActive ? "var(--white)" : "var(--black)")};

    cursor: pointer;
`;

function AccessTab({ setIsPublic }) {
    const [activeTab, setActiveTab] = useState(true);

    const handleTabClick = (isPublic) => {
        setIsPublic(isPublic);
        setActiveTab(isPublic);
    };

    return (
        <TabContainer>
            <Tab isActive={activeTab} onClick={() => handleTabClick(true)}>
                공개
            </Tab>
            <Tab isActive={!activeTab} onClick={() => handleTabClick(false)}>
                비공개
            </Tab>
        </TabContainer>
    );
}

export { AccessTab };

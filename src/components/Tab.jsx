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

    background-color: var(--gray50);

    &:hover {
    }

    &:focus {
        background-color: var(--black);

        color: var(--white);
    }

    cursor: pointer;
`;

function AccessTab() {
    return (
        <TabContainer>
            <Tab>공개</Tab>
            <Tab>비공개</Tab>
        </TabContainer>
    );
}

export { AccessTab };
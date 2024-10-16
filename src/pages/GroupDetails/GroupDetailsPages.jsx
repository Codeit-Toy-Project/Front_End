import styled from "styled-components";
import { useState } from "react";

import Profile from "../../components/profile";
import { CreateMemoryButton } from "../../components/Button";
import InputArea from "../../components/InputArea";
import { OpenMemoryList, PrivateMemoryList } from "../../components/ListView";
import More from "../../components/More";

const ListHeadBox = styled.div`
    position: relative;

    border-top: 1px solid var(--gray200);

    width: 1580px;
    height: 165px;

    margin-top: 40px;

    padding-top: 80px;
`;

const Title = styled.p`
    position: absolute;

    left: 50%;
    transform: translateX(-50%);

    color: var(--black);
    font-size: 24px;
    font-weight: bold;
`;

const MemorySubmitButton = styled.div`
    position: absolute;
    right: 0;
`;

export default function MemoryDetailsPages() {
    // InputArea -> AccessTab -> Tab
    const [isPublic, setIsPublic] = useState(true);

    return (
        <div>
            <Profile />

            <ListHeadBox>
                <Title>추억 목록</Title>
                <MemorySubmitButton>
                    <CreateMemoryButton></CreateMemoryButton>
                </MemorySubmitButton>
            </ListHeadBox>

            <InputArea setIsPublic={setIsPublic} />
            {isPublic ? <OpenMemoryList /> : <PrivateMemoryList />}
            <More />
        </div>
    );
}

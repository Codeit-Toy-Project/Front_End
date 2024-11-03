import styled from "styled-components";
import noneGroup from "../assets/favicon/noneGroup.png";
import noneMemory from "../assets/favicon/noneMemory.png";
import {
    GroupCard,
    MemoryCard,
    PrivateGroupCard,
    PrivateMemoryCard,
} from "./Card";
import { useState } from "react";

//-----------------------------------------------
// Group Area

const GroupListBox = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 1600px;
    margin-top: 48px;
`;

const GroupListArea = styled.div`
    display: flex;

    flex-wrap: wrap;
    gap: 20px;
    margin-left: 20px;
`;

const NUM_CARDS = 12;

//--------------------------------------------------

function OpenGroupList({ groups }) {
    return (
        <>
            <GroupListBox>
                <GroupListArea>
                    {groups.map((group, index) => (
                        <GroupCard key={index} group={group} />
                    ))}
                </GroupListArea>
            </GroupListBox>
        </>
    );
}

function PrivateGroupList({ groups }) {
    return (
        <>
            <GroupListBox>
                <GroupListArea>
                    {groups.map((group, index) => (
                        <PrivateGroupCard key={index} group={group} />
                    ))}
                </GroupListArea>
            </GroupListBox>
        </>
    );
}

function OpenMemoryList() {
    return (
        <>
            <GroupListBox>
                <GroupListArea>
                    {Array.from({ length: NUM_CARDS }).map((_, index) => (
                        <MemoryCard key={index} />
                    ))}
                </GroupListArea>
            </GroupListBox>
        </>
    );
}

function PrivateMemoryList() {
    return (
        <>
            <GroupListBox>
                <GroupListArea>
                    {Array.from({ length: NUM_CARDS }).map((_, index) => (
                        <PrivateMemoryCard key={index} />
                    ))}
                </GroupListArea>
            </GroupListBox>
        </>
    );
}

function NoneGroupList() {
    return (
        <>
            <GroupListBox>
                <img src={noneGroup} />
            </GroupListBox>
        </>
    );
}

function NoneMemoryList() {
    return (
        <>
            <GroupListBox>
                <img src={noneMemory} />
            </GroupListBox>
        </>
    );
}

export {
    OpenGroupList,
    PrivateGroupList,
    NoneGroupList,
    OpenMemoryList,
    PrivateMemoryList,
    NoneMemoryList,
};

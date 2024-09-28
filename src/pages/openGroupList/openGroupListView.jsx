import styled from "styled-components";

import { CreateGroupButton } from "../../components/Button";
import { AccessTab } from "../../components/Tab";
import { GroupSearch } from "../../components/Input";
import { ArrayDropDown } from "../../components/DropDown";
import { GroupCard } from "../../components/Card";

// Head Area

const HeadArea = styled.div`
    display: flex;

    gap: 20px;
`;

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
// Nav Bar - HeadArea(Access Tab, Input Box , DropDown List) - (Group List) - More
export default function openGroupListView() {
    return (
        <>
            <HeadArea>
                <AccessTab />
                <GroupSearch />
                <ArrayDropDown />
            </HeadArea>

            <GroupListBox>
                <GroupListArea>
                    {Array.from({ length: NUM_CARDS }).map((_, index) => (
                        <GroupCard key={index} />
                    ))}
                </GroupListArea>
            </GroupListBox>
        </>
    );
}

import styled from "styled-components";

import { CreateGroupButton } from "./Button";
import { AccessTab } from "./Tab";
import { GroupSearch } from "./Input";
import { ArrayDropDown } from "./DropDown";

const HeadArea = styled.div`
    display: flex;

    gap: 20px;
`;

function InputArea({ setSearch, setIsPublic, setSort }) {
    return (
        <HeadArea>
            <AccessTab setIsPublic={setIsPublic} />
            <GroupSearch setSearch={setSearch} />
            <ArrayDropDown setSort={setSort} />
        </HeadArea>
    );
}

export default InputArea;

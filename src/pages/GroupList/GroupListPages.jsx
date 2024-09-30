import styled from "styled-components";

import InputArea from "../../components/InputArea";
import {
    OpenGroupList,
    PrivateGroupList,
    OpenMemoryList,
    PrivateMemoryList,
} from "../../components/ListView";

//--------------------------------------------------
// Nav Bar - Input Area(Access Tab, Input Box , DropDown List) - (Group List) - More
export default function openGroupListPages() {
    return (
        <>
            <InputArea></InputArea>
            <OpenGroupList></OpenGroupList>
        </>
    );
}

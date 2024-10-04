import { useState } from "react";

import InputArea from "../../components/InputArea";
import { OpenGroupList, PrivateGroupList } from "../../components/ListView";
import More from "../../components/More";

//--------------------------------------------------
// Nav Bar - Input Area(Access Tab, Input Box , DropDown List) - (Group List) - More
export default function GroupListPages() {
    // InputArea -> AccessTab -> Tab
    const [isPublic, setIsPublic] = useState(true);

    return (
        <>
            <InputArea setIsPublic={setIsPublic} />
            {isPublic ? <OpenGroupList /> : <PrivateGroupList />}
            <More />
        </>
    );
}

import { useState, useEffect } from "react";
import axios from "axios";

import InputArea from "../../components/InputArea";
import {
    OpenGroupList,
    PrivateGroupList,
    NoneGroupList,
} from "../../components/ListView";
import More from "../../components/More";

//--------------------------------------------------
// Nav Bar - Input Area(Access Tab, Input Box , DropDown List) - (Group List) - More
export default function GroupListPages() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("최신순");

    // InputArea -> AccessTab -> Tab
    const [isPublic, setIsPublic] = useState(true);

    // fetch
    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/groups"
                ); // 서버 URL에 맞게 수정
                setGroups(response.data.data);
                console.log(groups); // 서버에서 받은 데이터 설정
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // init
        fetchGroups();
    }, []);

    // search fillter
    const filteredGroups = groups.filter((group) =>
        group.name.toLowerCase().includes(search.toLowerCase())
    );

    // sort groups
    const sortedGroups = (() => {
        return filteredGroups.sort((a, b) => {
            if (sort === "최신순") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (sort === "공감순") {
                return b.likeCount - a.likeCount;
            }
            return 0;
        });
    })();

    const publicGroups = filteredGroups.filter((group) => group.isPublic);
    const privateGroups = filteredGroups.filter((group) => !group.isPublic);

    return (
        <>
            <InputArea
                setSearch={setSearch}
                setIsPublic={setIsPublic}
                setSort={setSort}
            />
            {filteredGroups.length === 0 ? (
                <NoneGroupList />
            ) : (
                <>
                    {isPublic ? (
                        <>
                            <OpenGroupList groups={publicGroups} />
                            {publicGroups.length >= 10 && <More />}
                        </>
                    ) : (
                        <>
                            <PrivateGroupList groups={privateGroups} />
                            {privateGroups.length >= 10 && <More />}
                        </>
                    )}
                </>
            )}
        </>
    );
}

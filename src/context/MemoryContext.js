import { createContext, useState } from "react";
import axios from "axios";

const MemoryContext = createContext();

const MemoryProvider = ({ children }) => {
    const [memories, setMemories] = useState([]);
    const [currentMemory, setCurrentMemory] = useState({
        nickname: "",
        title: "",
        content: "",
        postPassword: "",
        groupPassword: "",
        imageUrl: "",
        tags: [],
        location: "",
        moment: "",
        isPublic: true,
    });

    const updateMemory = (field, value) => {
        setCurrentMemory({
            ...currentMemory,
            [field]: value,
        });
    };

    const submitMemory = async (groupPassword) => {
        const payload = {
            ...currentMemory,
            groupPassword: groupPassword,
        };

        try {
            const response = await axios.post(
                "https://api.your-server.com/memories",
                payload
            );
            console.log("추억이 성공적으로 생성되었습니다:", response.data);

            setMemories([...memories, response.data]);

            setCurrentMemory({
                nickname: "",
                title: "",
                content: "",
                postPassword: "",
                groupPassword: "",
                imageUrl: "",
                tags: [],
                location: "",
                moment: "",
                isPublic: true,
            });
        } catch (error) {
            console.error("추억 생성 중 오류가 발생했습니다:", error);
        }
    };

    return (
        <MemoryContext.Provider
            value={{ currentMemory, updateMemory, submitMemory }}
        >
            {children}
        </MemoryContext.Provider>
    );
};

export default MemoryProvider; // default export 사용
export { MemoryContext };

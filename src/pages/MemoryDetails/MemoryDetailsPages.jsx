import styled from "styled-components";
import {
    MemoryCardInfo,
    MemoryContentInfo,
    CommentInfo,
} from "../../components/Info";

export default function MemoryDetailsPages() {
    return (
        <>
            <MemoryCardInfo></MemoryCardInfo>
            <MemoryContentInfo></MemoryContentInfo>
            <CommentInfo></CommentInfo>
        </>
    );
}

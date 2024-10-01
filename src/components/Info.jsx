import styled from "styled-components";
import icon64 from "../assets/favicon/favicon64_64.png";
import comment from "../assets/favicon/comment.png";
import EmpathyButton from "./Like";
import { PostCommentButton } from "./Button";
import { Comment } from "./comment";

const HeadArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 1560px;
    height: 273px;

    gap: 20px;
`;

// ---------------------------

const HeadInfo = styled.div`
    display: flex;

    width: 100%;

    justify-content: space-between;
`;

// ---------------------------

const HeadBox = styled.div`
    display: flex;

    gap: 10px;

    color: var(--gray400);
    font-size: 14px;
`;

const DateInfo = styled.div`
    color: var(--black);
`;

const AccessInfo = styled.div``;

// ----------------------------

const ButtonContainer = styled.div`
    display: flex;

    gap: 25px;
`;

const Button = styled.button`
    font-size: 13px;

    color: ${(props) => (props.isActive ? "#000000" : "#8D8D8D")};

    font-weight: 550;

    background-color: transparent;

    border: none;
    cursor: pointer;
`;

const EditButton = styled(Button)`
    &:hover {
        color: #282828;
    }
`;

const DeleteButton = styled(Button)`
    &:hover {
        color: #282828;
    }
`;

// -----------------------------

const Title = styled.div`
    color: var(--black);
    font-size: 30px;
    font-weight: bold;
`;

// -----------------------------

const HashTagBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;

    height: 38px;
`;

const HashTag = styled.div`
    display: flex;

    color: var(--gray200);
    font-size: 18px;
`;

// ---------------------------------

const BottomInfo = styled.div`
    display: flex;
    justify-content: spcae-between;

    width: 100%;
`;

// --------------------------------

const BottomBox = styled.div`
    display: flex;

    width: 100%;

    gap: 20px;
`;

const LoacationDate = styled.div`
    display: flex;

    color: var(--black);
    font-size: 16px;
    font-weight: bold;
`;

const CommentBox = styled.div`
    display: flex;

    gap: 5px;
`;

const Icon = styled.img`
    width: 22px;
    height: 22px;
`;

const BottomCount = styled.div`
    display: flex;

    color: var(--black);
    font-size: 14px;

    gap: 5px;

    color: var(--gray400);
`;

//-----------------------------------

function MemoryCardInfo() {
    return (
        <>
            <HeadArea>
                <HeadInfo>
                    <HeadBox>
                        <DateInfo>달봉이 아들</DateInfo>|
                        <AccessInfo>공개</AccessInfo>
                    </HeadBox>
                    <ButtonContainer>
                        <EditButton>추억 수정하기</EditButton>
                        <DeleteButton>추억 삭제하기</DeleteButton>
                    </ButtonContainer>
                </HeadInfo>

                <Title>Title</Title>

                <HashTagBox>
                    <HashTag>#태그</HashTag>
                    <HashTag>#태그</HashTag>
                    <HashTag>#태그</HashTag>
                    <HashTag>#태그</HashTag>
                </HashTagBox>
                <BottomInfo>
                    <BottomBox>
                        <LoacationDate>인천앞바다ㆍ24.01.19</LoacationDate>
                        <CommentBox>
                            <Icon src={icon64} />
                            <BottomCount>120</BottomCount>
                        </CommentBox>
                        <CommentBox>
                            <Icon src={comment} />
                            <BottomCount>8</BottomCount>
                        </CommentBox>
                    </BottomBox>
                    <EmpathyButton></EmpathyButton>
                </BottomInfo>
            </HeadArea>
        </>
    );
}

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 1560px;
    height: 1224px;

    border-top: 1px solid var(--gray200);
    padding: 2px;
`;

const ImgBox = styled.div`
    display: flex;

    width: 780px;
    height: 780px;

    border: none;
    border-radius: 6px;

    background-color: var(--gray400);
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;

    width: 780px;
    height: 220px;

    padding: 20px;

    color: var(--black);
    font-size: 20px;

    word-wrap: break-word;
    word-break: break-all;

    overflow: auto;
`;

function MemoryContentInfo() {
    return (
        <>
            <ContentBox>
                <ImgBox></ImgBox>
                <Content>content</Content>
            </ContentBox>
            <PostCommentButton></PostCommentButton>
        </>
    );
}

const CommentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 1560px;
    height: 330px;

    margin-top: 144px;
`;

const CommentNumber = styled.div`
    display: flex;
    align-items: flex-start;

    width: 1560px;

    border-bottom: 1px solid var(--gray400);
    padding: 10px;

    color: var(--black);
    font-size: 18px;
    font-weight: 500;
`;

function CommentInfo() {
    return (
        <CommentArea>
            <CommentNumber>댓글 8</CommentNumber>
            <Comment></Comment>
        </CommentArea>
    );
}

export { MemoryCardInfo, MemoryContentInfo, CommentInfo };

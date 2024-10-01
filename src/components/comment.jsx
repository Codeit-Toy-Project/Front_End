import styled from "styled-components";
import pen from "../assets/favicon/Pen.png";
import trash from "../assets/favicon/Trash.png";

const Icon = styled.img`
    width: 22px;
    height: 22px;
`;

const CommentList = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

const CommentItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 1575px;
    height: 80px;

    border-bottom: 0.5px solid var(--gray200);

    color: var(--black);
    font-size: 16px;
`;

const WriterInfo = styled.div`
    display: flex;

    gap: 5px;
`;

const WriterName = styled.div``;
const WriteDate = styled.div`
    color: var(--gray400);
`;

const CommentContentBox = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`;

const EidtBox = styled.div`
    display: flex;
    gap: 20px;
`;

function Comment() {
    return (
        <CommentList>
            <CommentItems>
                <WriterInfo>
                    <WriterName>writer info</WriterName>
                    <WriteDate>YYYY.MM.DD HH.mm</WriteDate>
                </WriterInfo>
                <CommentContentBox>
                    content
                    <EidtBox>
                        <Icon src={pen} />
                        <Icon src={trash} />
                    </EidtBox>
                </CommentContentBox>
            </CommentItems>
            <CommentItems>
                <WriterInfo>
                    <WriterName>writer info</WriterName>
                    <WriteDate>YYYY.MM.DD HH.mm</WriteDate>
                </WriterInfo>
                <CommentContentBox>
                    content
                    <EidtBox>
                        <Icon src={pen} />
                        <Icon src={trash} />
                    </EidtBox>
                </CommentContentBox>
            </CommentItems>
            <CommentItems>
                <WriterInfo>
                    <WriterName>writer info</WriterName>
                    <WriteDate>YYYY.MM.DD HH.mm</WriteDate>
                </WriterInfo>
                <CommentContentBox>
                    content
                    <EidtBox>
                        <Icon src={pen} />
                        <Icon src={trash} />
                    </EidtBox>
                </CommentContentBox>
            </CommentItems>
        </CommentList>
    );
}

export { Comment };

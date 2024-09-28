import styled from "styled-components";
import icon16 from "../assets/favicon/favicon16_16.png";
import icon64 from "../assets/favicon/favicon64_64.png";

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 375px;
    height: 560px;

    background-color: var(--gray50);
    border-radius: 12px;
    border: 1px solid var(--gray200);
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
`;

const PrivateCardBox = styled(CardBox)`
    height: 156px;
`;

//-----------------------------------
// Img

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 335px;
    height: 335px;

    background-color: var(--gray200);
    border-radius: 6px;
`;

//-----------------------------------
// Head Info

const HeadBox = styled.div`
    display: flex;

    width: 100%;
    gap: 10px;

    color: var(--gray400);
    font-size: 14px;
`;

const DateInfo = styled.div`
    color: var(--black);
`;

const AccessInfo = styled.div``;

//-----------------------------------
// Content Info

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 10px;
`;

const ContentTitle = styled.div`
    color: var(--black);
    font-size: 16px;
    font-weight: bold;
`;

const ContentDesc = styled.div`
    color: var(--black);
    font-size: 16px;
`;

//-----------------------------------
// Count Info

const CountBox = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 38px;

    gap: 40px;
    margin-bottom: 20px;
`;

const CountInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CountName = styled.p`
    color: var(--gray400);
    font-size: 12px;
`;

const CountNum = styled.text`
    display: flex;

    color: var(--black);
    font-size: 14px;

    gap: 5px;
`;

//-----------------------------------

//CardBox -> ImgBox, (DateInfo, AccessInfo), (Title, Description), (BadgeVCount, MemoryCount, EmpathyCount)

//공개 그룹 카드
function GroupCard() {
    return (
        <CardBox>
            {/*Img Box */}
            <ImgBox>
                <img src={icon64}></img>
            </ImgBox>

            {/* Head Info */}
            <HeadBox>
                <DateInfo>D+265</DateInfo>|<AccessInfo>공개</AccessInfo>
            </HeadBox>

            {/* Content Info */}
            <ContentBox>
                <ContentTitle>에델바이스</ContentTitle>
                <ContentDesc>
                    서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.
                </ContentDesc>
            </ContentBox>

            {/* Count Info */}
            <CountBox>
                <CountInfo>
                    <CountName>획득배지</CountName>
                    <CountNum>2</CountNum>
                </CountInfo>
                <CountInfo>
                    <CountName>추억</CountName>
                    <CountNum>8</CountNum>
                </CountInfo>
                <CountInfo>
                    <CountName>그룹 공감</CountName>
                    <CountNum>
                        <img src={icon16} />
                        1.5K
                    </CountNum>
                </CountInfo>
            </CountBox>
        </CardBox>
    );
}

//비공개 그룹 카드
function PrivateGroupCard() {
    return (
        <PrivateCardBox>
            <HeadBox>
                <DateInfo>D+265</DateInfo>|<AccessInfo>비공개</AccessInfo>
            </HeadBox>

            {/* Content Info */}
            <ContentBox>
                <ContentTitle>에델바이스</ContentTitle>
            </ContentBox>

            {/* Count Info */}
            <CountBox>
                <CountInfo>
                    <CountName>추억</CountName>
                    <CountNum>8</CountNum>
                </CountInfo>
                <CountInfo>
                    <CountName>그룹 공감</CountName>
                    <CountNum>
                        <img src={icon16} />
                        1.5K
                    </CountNum>
                </CountInfo>
            </CountBox>
        </PrivateCardBox>
    );
}

//공개 추억 카드
function MemoryCard() {}

//비공개 추억 카드
function PrivateMemoryCard() {}

export { GroupCard, PrivateGroupCard as PrivateCard };

import React, { useState, useRef } from "react";
import styled from "styled-components";
import profileImg from "../../src/assets/favicon/profileImg.png";
import empathyIcon from "../../src/assets/favicon/favicon32_32.png";
import EmpathyButton from "./Like";

// 추억, 공감 컴포넌트
const Memories = () => {
    return (
        <MemoeryCtn>
            <TextGroup>
                <Text>추억</Text>
                <Text>8</Text>
            </TextGroup>
            <Divider>|</Divider>
            <TextGroup>
                <Text>그룹 공감</Text>
                <Text>1.5K</Text>
            </TextGroup>
        </MemoeryCtn>
    );
};

// 수정, 삭제 버튼 컴포넌트
const ResponsiveButtons = () => {
    const [activeButton, setActiveButton] = useState(null);
    return (
        <ButtonContainer>
            <EditButton
                isActive={activeButton === "edit"}
                onClick={() => setActiveButton("edit")}
            >
                그룹 정보 수정하기
            </EditButton>
            <DeleteButton
                isActive={activeButton === "delete"}
                onClick={() => setActiveButton("delete")}
            >
                그룹 삭제하기
            </DeleteButton>
        </ButtonContainer>
    );
};

// 상단 D-DAY, 공개 비공개 여부
const Contents = () => {
    return (
        <InforCtn width={121} height={20} gap={15}>
            <D_Day>D+265</D_Day>
            <Line>|</Line>
            <Isopen>공개</Isopen>
        </InforCtn>
    );
};

const SettingCtn = () => {
    return (
        <InforCtn gap={850}>
            <Contents />
            <ResponsiveButtons />
        </InforCtn>
    );
};

// 상단 콘텐츠
const TopContents = () => {
    return (
        <InforCtn gap={15}>
            <ContentsCtn>
                <div
                    style={{
                        display: "flex",
                        gap: "29%",
                        alignItems: "center",
                    }}
                >
                    <Title>
                        달봉이네 가족 달봉이네 가족 어디까지 길어지는 거예요??
                        글자수 제한 한 줄까지
                    </Title>
                    <Memories />
                </div>
                <Introduction>
                    서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로
                    한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한
                    마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한
                    마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한
                    마음으로 응원하고 아끼는 달봉이네 가족입니다. 그냥 끝까지로
                    할게요 그리고 두 줄까지만!
                </Introduction>
            </ContentsCtn>
        </InforCtn>
    );
};

// BadgeListComponent: 배지 리스트 컴포넌트
const BadgeListComponent = ({ badges }) => {
    const badgeListRef = useRef(null);
    const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
    const [scrollRightVisible, setScrollRightVisible] = useState(true);

    // 스크롤 왼쪽으로 이동
    const scrollLeft = () => {
        badgeListRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    // 스크롤 오른쪽으로 이동
    const scrollRight = () => {
        badgeListRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    // 스크롤 상태에 따라 버튼 보이기
    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = badgeListRef.current;
        setScrollLeftVisible(scrollLeft > 0);
        setScrollRightVisible(scrollLeft + clientWidth < scrollWidth);
    };

    return (
        <BadgeListContainer>
            {/* 왼쪽 스크롤 버튼 */}
            <ScrollButton left onClick={scrollLeft} visible={scrollLeftVisible}>
                &lt;
            </ScrollButton>

            <BadgeList ref={badgeListRef} onScroll={handleScroll}>
                {badges.map((badge, index) => (
                    <BadgeItem key={index}>{badge}</BadgeItem>
                ))}
            </BadgeList>

            <ScrollButton onClick={scrollRight} visible={scrollRightVisible}>
                &gt;
            </ScrollButton>
        </BadgeListContainer>
    );
};

//임시 데이터
const badges = [
    "👾 7일 연속 추억 등록",
    "🌼 그룹 공감 1만 개 이상 받기",
    "💖 게시글 공감 1만 개 이상 받기",
    "👾 7일 연속 추억 등록",
    "dddddddddddddddddddddd",
    "sssssssssssssssssssss",
];

// Badge 컴포넌트
const Badge = () => {
    return (
        <BadgeCtn>
            <BadgeText>획득 배지</BadgeText>
            <BadgeListComponent badges={badges} />
            <EmpathyButton />
        </BadgeCtn>
    );
};

// 전체 Profile 컴포넌트
const Profile = () => {
    return (
        <Container>
            <ProfileImage src={profileImg} alt="Profile Image" />
            <ContentsCtn>
                <SettingCtn />
                <TopContents />
                <Badge />
            </ContentsCtn>
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 1560px;
    max-height: 273px;
    margin-left: 3%;
`;

const ContentsCtn = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    margin-left: 1%;
`;

const ProfileImage = styled.img`
    width: 180px;
    height: 190px;
    object-fit: contain;
`;

const InforCtn = styled.div`
    max-width: ${(props) => `${props.width}px`};
    max-height: ${(props) => `${props.height}px`};
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    gap: ${(props) => `${props.gap}px`};
    display: inline-flex;
    word-wrap: break-word;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;
`;

const Button = styled.button`
    text-align: center;
    font-size: 13px;
    color: ${(props) => (props.isActive ? "#000000" : "#8D8D8D")};
    font-weight: 550;
    padding: 8px 16px;
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

const D_Day = styled.div`
    color: #282828;
    font-size: 13px;
    font-weight: 400;
    word-wrap: break-word;
`;

const Line = styled.div`
    color: #b8b8b8;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
`;

const Isopen = styled.div`
    color: #8d8d8d;
    font-size: 13px;
    font-weight: 400;
    word-wrap: break-word;
`;

const Title = styled.div`
    color: #282828;
    font-size: 18px;
    font-weight: 700;
    word-wrap: break-word;
`;

const Introduction = styled.div`
    width: 1238px;
    color: #282828;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
`;

const MemoeryCtn = styled.div`
    width: 250px;
    height: 23px;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;
    display: inline-flex;
`;

const TextGroup = styled.div`
    justify-content: flex-start;
    align-items: flex-start;
    gap: 7px;
    display: flex;
`;

const Divider = styled.div`
    color: #b8b8b8;
    font-size: 15px;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    word-wrap: break-word;
`;

const Text = styled.div`
    color: #282828;
    font-size: 13px;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 700;
    word-wrap: break-word;
`;

const BadgeText = styled.div`
    color: #282828;
    font-size: 14px;
    font-weight: 900;
    word-wrap: break-word;
`;

const BadgeCtn = styled.div`
    width: 70%;
    height: 6%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    display: inline-flex;
    margin-left: 1%;
    margin-top: 1%;
`;

// 배지 리스트 컨테이너
const BadgeListContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
`;

// 배지 리스트 (가로 스크롤 가능)
const BadgeList = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 10px 0;
    &::-webkit-scrollbar {
        display: none;
    }
`;

// 배지 아이템
const BadgeItem = styled.div`
    padding: 16px 30px;
    background: #f4f4f4;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    color: #282828;
`;

// 좌우 이동 버튼
const ScrollButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.959);
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    font-size: 18px;
    border-radius: 50%;
    display: ${(props) => (props.visible ? "block" : "none")};
    ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
`;

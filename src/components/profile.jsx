import React, { useState } from "react";
import styled from 'styled-components';
import profileImg from '../../src/assets/favicon/profileImg.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 1560px;
    max-height: 273px;
`

const ContentsCtn = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    margin-left: 1%;
`

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
    align-Items:center;
`


const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
`;

const Button = styled.button`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.isActive ? '#000000' : '#8D8D8D')}; 
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
`
const Line = styled.div`
    color: #B8B8B8; 
    font-size: 14px; 
    font-weight: 400; 
    word-wrap: break-word;
`
const Isopen = styled.div`
    color: #8D8D8D; 
    font-size: 13px; 
    font-weight: 400; 
    word-wrap: break-word;
`

const Title = styled.div`
    color: #282828; 
    font-size: 18px; 
    font-weight: 700; 
    word-wrap: break-word;
`

const Introduction= styled.div`
    width: 1238px; 
    color: #282828;
    font-size: 15px;
    font-weight: 400; 
    line-height: 24px; 
    word-wrap: break-word;
`



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
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const Text = styled.div`
  color: #282828;
  font-size: 13px;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

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


//수정, 삭제 버튼 
const ResponsiveButtons = () => {
    const [activeButton, setActiveButton] = useState(null);
    return (
      <ButtonContainer>
        <EditButton
          isActive={activeButton === 'edit'}
          onClick={() => setActiveButton('edit')}
        >
          그룹 정보 수정하기
        </EditButton>
        <DeleteButton
          isActive={activeButton === 'delete'}
          onClick={() => setActiveButton('delete')}
        >
          그룹 삭제하기
        </DeleteButton>
      </ButtonContainer>
    );
  };


//상단 D-DAY, 공개 비공개 여부
const Contents = () => {
    return(
          <InforCtn width={121} height={20} gap={15}>
                <D_Day>D+265</D_Day>
                <Line>|</Line>
                <Isopen>공개</Isopen>
            </InforCtn>
    );
}

const SettingCtn = () => {
    return(
        <InforCtn  gap={850}>
            <Contents/>
            <ResponsiveButtons/>
        </InforCtn>
    );
}

const TopContents = () => {
    return(
        
        <InforCtn  gap={15}>
            
            <ContentsCtn>
                <div style={{ display: 'flex', gap: '29%', alignItems:'center' }}>
                    <Title>달봉이네 가족 달봉이네 가족 어디까지 길어지는 거예요?? 글자수 제한 한 줄까지</Title>
                    <Memories/>
                </div>
                <Introduction>
                    서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 
                    서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 그냥 끝까지로 할게요 그리고 두 줄까지만!
                </Introduction>
                
            </ContentsCtn>

        </InforCtn>
    );
}


const profile = () => {
    
    return (
        <Container>
            <ProfileImage src={profileImg} alt="Profile Image"/> 
                <ContentsCtn>
                    <SettingCtn/>
                    <TopContents/>
                </ContentsCtn>
        </Container>
    );
}

export default profile;
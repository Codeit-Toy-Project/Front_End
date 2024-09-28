import styled from "styled-components";

const SearchContainer = styled.div`
    position: relative;
`;

const InputBox = styled.input`
    width: 100%;
    height: 45px;

    border-radius: 6px;

    padding-left: 45px;
`;

const Search = styled(InputBox)`
    width: 1186px;

    border: none;
    background-color: var(--gray100);

    color: var(--gray400);
    font-size: 14px;
`;

const Icon = styled.i`
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);

    color: var(--gray400);
`;

function GroupSearch() {
    return (
        <SearchContainer>
            <Icon className="fas fa-search"></Icon>
            <Search placeholder="그룹명을 검색해 주세요" />
        </SearchContainer>
    );
}

export { GroupSearch };

import styled from "styled-components";
import React, { useState } from "react";

const DropDownButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 160px;
    height: 45px;

    background-color: var(--gray50);
    border-radius: 6px;
    border: 2px solid var(--black);
    cursor: pointer;

    color: var(--black);
    font-size: 14px;
    font-weight: 500;

    padding-left: 20px;
`;

const Arrow = styled.i`
    width: 24px;
`;

const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;

    background-color: var(--gray50);
    border: 2px solid var(--black);
    border-radius: 6px;

    margin: 0;
    padding: 0;
`;

const DropdownItem = styled.li`
    display: flex;

    justify-content: start-left;
    align-items: center;

    width: 137px;
    height: 45px;

    cursor: pointer;
    border-radius: 6px;

    color: var(--gray500);
    font-weight: 500;
    font-size: 14px;

    padding-left: 20px;

    &:hover {
        background-color: var(--gray100);
    }
`;

function ArrayDropDown({ setSort }) {
    const options = ["최신순", "댓글순", "공감순"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSort(option);
        setIsOpen(false);
    };

    return (
        <div style={{ position: "relative" }}>
            <DropDownButton onClick={toggleDropdown}>
                {selectedOption}
                {isOpen && <Arrow className="fas fa-caret-up"></Arrow>}
                {!isOpen && <Arrow className="fas fa-caret-down"></Arrow>}
            </DropDownButton>

            {isOpen && (
                <DropdownList>
                    {options.map((option, index) => (
                        <DropdownItem
                            key={index}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                            <Arrow isOpen={isOpen}></Arrow>
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </div>
    );
}

export { ArrayDropDown };

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav";
import GroupDetailsPages from "./pages/GroupDetails/GroupDetailsPages";
import MemoryDetailsPages from "./pages/MemoryDetails/MemoryDetailsPages";
import GroupListPages from "./pages/GroupList/GroupListPages";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;
`;

function App() {
    return (
        <Router>
            <Nav />
            <StyledContainer>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/group-details" />}
                    />
                    <Route
                        path="/group-details"
                        element={<GroupDetailsPages />}
                    />
                    <Route
                        path="/memory-details"
                        element={<MemoryDetailsPages />}
                    />
                    <Route path="/group-list" element={<GroupListPages />} />
                </Routes>
            </StyledContainer>
        </Router>
    );
}

export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav";
import GroupDetailsView from "./pages/GroupDetails/GroupDetailsView";
import MemoryDetailsView from "./pages/MemoryDetails/MemoryDetailsView";
import OpenGroupListView from "./pages/openGroupList/openGroupListView";

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
                        element={<GroupDetailsView />}
                    />
                    <Route
                        path="/memory-details"
                        element={<MemoryDetailsView />}
                    />
                    <Route path="/group-list" element={<OpenGroupListView />} />
                </Routes>
            </StyledContainer>
        </Router>
    );
}

export default App;

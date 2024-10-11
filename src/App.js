import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav";
import GroupListPages from "./pages/GroupList/GroupListPages";
import CreateGroupPages from "./pages/CreateGroupPages";
import AccessPriavteGroupPages from "./pages/AccessPrivateGroupPages";
import GroupDetailsPages from "./pages/GroupDetails/GroupDetailsPages";
import AccessPriavteMemoryPages from "./pages/AccessPrivateMemoryPages";
import MemoryDetailsPages from "./pages/MemoryDetails/MemoryDetailsPages";

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
                    <Route path="/" element={<Navigate to="/group-list" />} />

                    <Route path="/group-list" element={<GroupListPages />} />

                    <Route
                        path="/create-group"
                        element={<CreateGroupPages />}
                    />

                    <Route
                        path="/access-private-group"
                        element={<AccessPriavteGroupPages />}
                    ></Route>

                    <Route
                        path="/group-details"
                        element={<GroupDetailsPages />}
                    />

                    <Route
                        path="/access-private-memory"
                        element={<AccessPriavteMemoryPages />}
                    ></Route>

                    <Route
                        path="/memory-details"
                        element={<MemoryDetailsPages />}
                    />
                </Routes>
            </StyledContainer>
        </Router>
    );
}

export default App;

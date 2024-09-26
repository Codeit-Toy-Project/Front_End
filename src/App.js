import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";

import GroupDetailsView from "./pages/GroupDetails/GroupDetailsView";
import MemoryDetailsView from "./pages/MemoryDetails/MemoryDetailsView";
import OpenGroupListView from "./pages/openGroupList/openGroupListView";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/group-details" />} />
                <Route path="/group-details" element={<GroupDetailsView />} />
                <Route path="/memory-details" element={<MemoryDetailsView />} />
                <Route path="/group-list" element={<OpenGroupListView />} />
            </Routes>
        </Router>
    );
}

export default App;

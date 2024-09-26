import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupDetailsView from '../src/GroupDetails/GroupDetailsView';
import MemoryDetailsView from '../src/MemoryDetails/MemoryDetailsView';
import OpenGroupListView from '../src/openGroupList/openGroupListView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GroupDetailsView />} />
        <Route path="/memory-details" element={<MemoryDetailsView />} />
        <Route path="/group-list" element={<OpenGroupListView />} />
      </Routes>
    </Router>
  );
}

export default App;

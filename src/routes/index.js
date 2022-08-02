import { Routes, Route, Navigate } from 'react-router-dom';

import * as Pages from '../pages';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/answers" element={<Pages.Answers />} />
      <Route path="/questions" element={<Pages.Questions />} />
    </Routes>
  );
};

export default AppRoute;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course.tsx";
import CoursesList from "./pages/Courses.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CoursesList />} />
      <Route path="/course/:id" element={<Course />} />
    </Routes>
  );
}

export default App;

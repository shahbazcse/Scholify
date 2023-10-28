import "./App.css";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Class from "./pages/Class";
import School from "./pages/School";
import Modal from "./components/Modals/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./features/students/studentsSlice";
import { fetchTeachers } from "./features/teachers/teachersSlice";

function App() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState({
    showModal: false,
    data: null,
    formType: null,
  });

  const { students } = useSelector((state) => state.students);
  const { teachers } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchTeachers());
  }, [dispatch, students, teachers]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <TopNavBar setOpenModal={setOpenModal} />
      <div className="flex h-[90%] w-full">
        <div className="w-[20%] ml-8">
          <LeftNavBar />
        </div>
        <div className="w-[80%]">
          <Routes>
            <Route
              path="/"
              element={<Students setOpenModal={setOpenModal} />}
            />
            <Route
              path="/students"
              element={<Students setOpenModal={setOpenModal} />}
            />
            <Route
              path="/teachers"
              element={<Teachers setOpenModal={setOpenModal} />}
            />
            <Route
              path="/class"
              element={<Class setOpenModal={setOpenModal} />}
            />
            <Route path="/school" element={<School />} />
          </Routes>
        </div>
        {openModal.showModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default App;

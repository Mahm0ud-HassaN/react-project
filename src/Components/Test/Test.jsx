import React, { useEffect, useState } from "react";
import { db, collection, getDocs, query, where } from "../../FireBase/firebaseConfig.js"; 
import Admin from "../Admin/Admin.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3; // عدد الكورسات في كل صفحة

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesRef = collection(db, "Courses");
      const querySnapshot = await getDocs(coursesRef);
      const coursesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(coursesList);
      setFilteredCourses(coursesList);
    };

    fetchCourses();
  }, []);

  // فلترة حسب البحث
  useEffect(() => {
    let filtered = courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // فلترة حسب الفئة
    if (category !== "All") {
      filtered = filtered.filter((course) => course.category === category);
    }

    setFilteredCourses(filtered);
  }, [searchTerm, category, courses]);

  // تقسيم إلى صفحات
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (<>

<Admin />
    <div className="container mt-4">
      <h2>Available Courses</h2>

      {/* 🔍 مربع البحث */}
      <input
        type="text"
        placeholder="Search courses..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🔽 فلترة حسب الفئة */}
      <select className="form-control mb-3" onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Science">Data Science</option>
        <option value="Design">Design</option>
      </select>

      {/* 🔥 عرض الكورسات */}
      <div className="row">
        {currentCourses.map((course) => (
          <div key={course.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={course.image} className="card-img-top" alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <p className="text-muted">💰 ${course.price} | ⭐ {course.rating}</p>
                <button className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ⏮ ⏭ أزرار التنقل بين الصفحات */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          disabled={indexOfLastCourse >= filteredCourses.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>

  </>
    );
};

export default Courses;

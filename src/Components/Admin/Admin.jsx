import React, { useState } from "react";
import axios from "axios";
import { db } from "../../FireBase/firebaseConfig.js"; // تأكد أن لديك إعداد Firebase جاهزًا
import { collection, addDoc } from "firebase/firestore";

const Admin = () => {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  // تحديث بيانات الفورم
  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  // رفع الصورة إلى ImgBB
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=fb2f440057b0cc71148c562e2c8bf1bb`,
        formData
      );
      setCourse({ ...course, image: res.data.data.url });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  // إرسال البيانات إلى Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!course.name || !course.description || !course.price || !course.rating || !course.image) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

    try {
      await addDoc(collection(db, "Courses"), course);
      alert("تم إضافة الكورس بنجاح!");
      setCourse({ name: "", description: "", price: "", rating: "", image: null });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>إضافة كورس جديد</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">اسم الكورس</label>
          <input type="text" name="name" className="form-control" value={course.name} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">الوصف</label>
          <textarea name="description" className="form-control" value={course.description} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">السعر ($)</label>
          <input type="number" name="price" className="form-control" value={course.price} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">التقييم (من 1 إلى 5)</label>
          <input type="number" name="rating" className="form-control" value={course.rating} onChange={handleChange} required min="1" max="5" />
        </div>
        
        <div className="mb-3">
          <label className="form-label">رفع صورة</label>
          <input type="file" className="form-control" onChange={handleImageUpload} required />
          {loading && <p>جاري رفع الصورة...</p>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>إضافة الكورس</button>
      </form>
    </div>
  );
}; 

export default Admin;

import React, { useState, useRef } from "react";
import './student.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Photo from './ahmed naser.png';

const StudentProfile = () => {
  const [photo, setPhoto] = useState(Photo);
  const fileInputRef = useRef(null); // مرجع لحقل إدخال الملف المخفي

  // دالة تغيير الصورة عند اختيار ملف جديد
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl); // تغيير الصورة
    }
  };

  // عند الضغط على الصورة، يتم تشغيل زر اختيار الملف المخفي
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="py">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="bg-gray-200 p-4 text-center">
      
            <img
              className="Photo w-32 h-32 mx-auto rounded-full cursor-pointer"
              src={photo}
              alt="Profile"
              onClick={handleImageClick} 
            />
            {}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
            <h3 className="mt-2 text-xl font-semibold">Ahmed naser hashem</h3>
          </div>
          <div className="p-4">
            <p className="mb-2"><strong>Student phone:</strong> 0772070959</p>
            <p className="mb-2"><strong>Class:</strong> 1</p>
            <p className="mb-2"><strong>Email:</strong> ahmedalshamilh@gmail.com</p>
          </div>
        </div>

        {/* General Information */}
        <div className="md:col-span-2 shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="bg-gray-200 p-4 border-b">
            <h3 className="text-xl font-semibold"><i className="far fa-clone pr-1"></i> General Information</h3>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="border border-gray-300">
                  <th className="p-2 w-1/3 text-left bg-gray-100">First Name</th>
                  <td className="p-2">Ahmed</td>
                </tr>
                <tr className="border border-gray-300">
                  <th className="p-2 w-1/3 text-left bg-gray-100">Last Name</th>
                  <td className="p-2">Naser</td>
                </tr>
                <tr className="border border-gray-300">
                  <th className="p-2 w-1/3 text-left bg-gray-100">Gender</th>
                  <td className="p-2">Male</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

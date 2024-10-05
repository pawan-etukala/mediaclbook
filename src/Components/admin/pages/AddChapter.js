import React, { useState } from "react";
import axios from "axios";

const AddChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [title, setTitle] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const chapterData = {
      chapterNumber,
      title,
    };

    try {
      // Example of sending data to an API using axios
      const response = await axios.post(
        `http://localhost:8080/admins/chapter/${chapterNumber}`,
        chapterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Chapter added successfully:", response.data);

      // Reset form fields after successful submission
      setChapterNumber("");
      setTitle("");
    } catch (error) {
      console.error("Error adding chapter:", error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center h-100">
      <div className="container mt-5">
        <h3>Add Chapter</h3>
        <form onSubmit={handleSubmit}>
          {/* Chapter Number Field */}
          <div className="form-group">
            <label htmlFor="chapterNumber">Chapter Number</label>
            <input
              type="number"
              className="form-control"
              id="chapterNumber"
              placeholder="Enter chapter number"
              value={chapterNumber}
              onChange={(e) => setChapterNumber(e.target.value)}
              required
            />
          </div>

          {/* Chapter Title Field */}
          <div className="form-group mt-3">
            <label htmlFor="chapterTitle">Chapter Title</label>
            <input
              type="text"
              className="form-control"
              id="chapterTitle"
              placeholder="Enter chapter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary mt-4">
            Add Chapter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddChapter;

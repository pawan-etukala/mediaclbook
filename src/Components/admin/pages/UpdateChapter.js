import React, { useState, useEffect } from "react";

import axios from "axios"; // Import Axios

const UpdateChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");

  const [chapterTitle, setChapterTitle] = useState("");

  // Fetch existing chapter data when the component mounts
  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await axios.get(`/admins/chapter/${chapterNumber}`);
        const chapter = response.data;
        setChapterNumber(chapter.chapterNumber);

        setChapterTitle(chapter.title);
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      }
    };

    fetchChapter();
  }, [chapterNumber]);

  // Handle form submission for updating the chapter
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedChapterData = {
      chapterNumber,
      chapterTitle,
    };

    try {
      const response = await axios.put(
        `/admins/chapter/${chapterNumber}`,
        updatedChapterData
      );
      console.log("Chapter updated successfully:", response.data);

      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Error updating chapter:", error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center h-100">
      <div className="container mt-5">
        <h3>Update Chapter</h3>
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
              value={chapterTitle}
              onChange={(e) => setChapterTitle(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary mt-4">
            Update Chapter
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateChapter;

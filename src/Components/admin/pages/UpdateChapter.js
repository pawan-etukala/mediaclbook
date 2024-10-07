import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

const UpdateChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [title, setTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("success");

  // Fetch existing chapter data when the component mounts
  useEffect(() => {
    if (chapterNumber) {
      const fetchChapter = async () => {
        try {
          const response = await axios.get(`/admins/chapter/${chapterNumber}`);
          const chapter = response.data;
          setChapterNumber(chapter.chapterNumber);
          setTitle(chapter.title);
        } catch (error) {
          console.error("Error fetching chapter data:", error);
        }
      };

      fetchChapter();
    }
  }, [chapterNumber]);

  // Handle form submission for updating the chapter
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedChapterData = {
      chapterNumber,
      title,
    };

    try {
      const response = await axios.put(
        `/admins/chapter/${chapterNumber}`,
        updatedChapterData
      );
      console.log("Chapter updated successfully:", response.data);
      setAlertMessage("Chapter updated successfully!");
      setAlertType("success");
      setAlertVisible(true);
    } catch (error) {
      console.error("Error updating chapter:", error);
      setAlertMessage("Error updating chapter. Please try again.");
      setAlertType("danger");
      setAlertVisible(true);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center h-100">
      <div className="container mt-5">
        <h3>Update Chapter</h3>
        {alertVisible && (
          <div
            className={`alert alert-${alertType} alert-dismissible fade show`}
            role="alert"
          >
            {alertMessage}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setAlertVisible(false)}
            ></button>
          </div>
        )}
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
            <label htmlFor="title">Chapter Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter chapter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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

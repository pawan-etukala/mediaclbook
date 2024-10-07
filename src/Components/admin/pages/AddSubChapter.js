import React, { useState, useEffect } from "react";
import axios from "axios";

const AddSubChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [subchapterNumber, setsubchapterNumber] = useState("");
  const [subchapterTitle, setSubchapterTitle] = useState("");
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const subChapterData = {
      chapterNumber,
      subchapterNumber,
      subchapterTitle,
      content,
      contentType: "TEXT", // Set contentType directly here
    };

    try {
      // Example of sending subchapter data to an API using axios
      const response = await axios.post(
        `http://localhost:8080/admins/subchapter/text?chapterId=${chapterNumber}`,
        subChapterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Subchapter added successfully:", response.data);

      // Set success alert
      setAlert({ type: "success", message: "Subchapter added successfully!" });
      setShowAlert(true);

      // Reset form fields after successful submission
      setChapterNumber("");
      setsubchapterNumber("");
      setSubchapterTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding subchapter:", error);

      // Set error alert
      setAlert({
        type: "danger",
        message: "Error adding subchapter. Please try again.",
      });
      setShowAlert(true);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add Subchapter</h3>
      {showAlert && alert.message && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {alert.message}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
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

        {/* Subchapter Number Field */}
        <div className="form-group mt-3">
          <label htmlFor="subchapterNumber">Subchapter Number</label>
          <input
            type="number"
            className="form-control"
            id="subchapterNumber"
            placeholder="Enter subchapter number"
            value={subchapterNumber}
            onChange={(e) => setsubchapterNumber(e.target.value)}
            required
          />
        </div>

        {/* Subchapter Title Field */}
        <div className="form-group mt-3">
          <label htmlFor="subchapterTitle">Subchapter Title</label>
          <input
            type="text"
            className="form-control"
            id="subchapterTitle"
            placeholder="Enter subchapter title"
            value={subchapterTitle}
            onChange={(e) => setSubchapterTitle(e.target.value)}
            required
          />
        </div>

        {/* Content Field */}
        <div className="form-group mt-3">
          <label htmlFor="content">Subchapter Content</label>
          <textarea
            className="form-control"
            id="content"
            placeholder="Enter subchapter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4">
          Add Subchapter
        </button>
      </form>
    </div>
  );
};

export default AddSubChapter;

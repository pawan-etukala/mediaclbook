import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateSubChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [subchapterNumber, setSubChapterNumber] = useState("");
  const [subchapterTitle, setSubChapterTitle] = useState("");
  const [content, setContent] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  // Fetch subchapter data when chapterNumber and subchapterNumber change
  useEffect(() => {
    const fetchSubChapterData = async () => {
      if (chapterNumber && subchapterNumber) {
        try {
          const response = await axios.get(
            `http://localhost:8080/admins/subchapter/TEXT/${chapterNumber}/${subchapterNumber}`
          );
          const { subchapterTitle, content } = response.data;
          setSubChapterTitle(subchapterTitle);
          setContent(content);
        } catch (error) {
          console.error("Error fetching subchapter data:", error);
        }
      }
    };

    fetchSubChapterData();
  }, [chapterNumber, subchapterNumber]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedSubChapterData = {
      chapterNumber,
      subchapterNumber,
      subchapterTitle,
      content,
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/admins/subchapter/TEXT/${chapterNumber}/${subchapterNumber}`,
        updatedSubChapterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Subchapter updated successfully:", response.data);
      setAlertMessage("Subchapter updated successfully!");
    } catch (error) {
      console.error("Error updating subchapter:", error);
      setAlertMessage("Error updating subchapter.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Update Subchapter</h3>
      {alertMessage && (
        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setAlertMessage("")}
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
          <label htmlFor="subChapterNumber">Subchapter Number</label>
          <input
            type="number"
            className="form-control"
            id="subChapterNumber"
            placeholder="Enter subchapter number"
            value={subchapterNumber}
            onChange={(e) => setSubChapterNumber(e.target.value)}
            required
          />
        </div>

        {/* Subchapter Title Field */}
        <div className="form-group mt-3">
          <label htmlFor="subChapterTitle">Subchapter Title</label>
          <input
            type="text"
            className="form-control"
            id="subChapterTitle"
            placeholder="Enter subchapter title"
            value={subchapterTitle}
            onChange={(e) => setSubChapterTitle(e.target.value)}
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
          Update Subchapter
        </button>
      </form>
    </div>
  );
};

export default UpdateSubChapter;

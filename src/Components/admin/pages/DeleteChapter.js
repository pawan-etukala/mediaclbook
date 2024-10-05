import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

const DeleteChapter = () => {
  const [chapterNumber, setChapterNumber] = useState(""); // State to hold the chapter number input
  const [bookName, setBookName] = useState(""); // State to hold the book name input
  const [chapterTitle, setChapterTitle] = useState(""); // State to hold the chapter title input
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Array of books for the dropdown
  const books = ["Book 1", "Book 2", "Book 3"];

  // Handle chapter deletion
  const handleDelete = async () => {
    if (!chapterNumber) {
      alert("Please enter a chapter number.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this chapter?")) {
      try {
        // Assuming chapterNumber will be used to fetch the correct chapter
        const response = await fetch(`/api/chapters/${chapterNumber}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete chapter");
        }

        console.log("Chapter deleted successfully");
        // Redirect or update UI after deletion
        navigate("/chapters"); // Assuming this route lists all chapters
      } catch (error) {
        console.error("Error deleting chapter:", error);
        alert("Error deleting chapter. Please try again.");
      }
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center h-100">
      <div className="container mt-5">
        <h3>Delete Chapter</h3>

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

        {/* Book Name Dropdown */}
        <div className="form-group mt-3">
          <label htmlFor="bookName">Book Name</label>
          <select
            className="form-control"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          >
            <option value="">Select a book</option>
            {books.map((book, index) => (
              <option key={index} value={book}>
                {book}
              </option>
            ))}
          </select>
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

        {/* Delete Button */}
        <button className="btn btn-danger mt-4" onClick={handleDelete}>
          Delete Chapter
        </button>
      </div>
    </div>
  );
};

export default DeleteChapter;

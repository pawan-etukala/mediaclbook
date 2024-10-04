import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

const DeleteSubChapter = () => {
  const [chapterNumber, setChapterNumber] = useState(""); // State to hold the chapter number
  const [bookNumber, setBookNumber] = useState(""); // State to hold the book number
  const [subChapterNumber, setSubChapterNumber] = useState(""); // State to hold the subchapter number
  const [subChapterContent, setSubChapterContent] = useState(""); // State to hold the subchapter content
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Array of books for the dropdown
  const books = ["Book 1", "Book 2", "Book 3"];

  // Handle subchapter deletion
  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!subChapterNumber) {
      alert("Please enter a subchapter number.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this subchapter?")) {
      try {
        const response = await fetch(`/api/subchapters/${subChapterNumber}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete subchapter");
        }

        console.log("Subchapter deleted successfully");
        // Redirect or update UI after deletion
        navigate("/subchapters"); // Assuming this route lists all subchapters
      } catch (error) {
        console.error("Error deleting subchapter:", error);
        alert("Error deleting subchapter. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h3>Delete Subchapter</h3>
      <form onSubmit={handleDelete}>
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

        {/* Book Number (Select Field) */}
        <div className="form-group mt-3">
          <label htmlFor="bookNumber">Book Number</label>
          <select
            className="form-control"
            id="bookNumber"
            value={bookNumber}
            onChange={(e) => setBookNumber(e.target.value)}
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

        {/* Subchapter Number Field */}
        <div className="form-group mt-3">
          <label htmlFor="subChapterNumber">Subchapter Number</label>
          <input
            type="number"
            className="form-control"
            id="subChapterNumber"
            placeholder="Enter subchapter number"
            value={subChapterNumber}
            onChange={(e) => setSubChapterNumber(e.target.value)}
            required
          />
        </div>

        {/* Subchapter Content Field */}
        <div className="form-group mt-3">
          <label htmlFor="subChapterContent">Subchapter Content</label>
          <textarea
            className="form-control"
            id="subChapterContent"
            placeholder="Enter subchapter content"
            value={subChapterContent}
            onChange={(e) => setSubChapterContent(e.target.value)}
            required
            rows="5"
          />
        </div>

        {/* Delete Button */}
        <button type="submit" className="btn btn-danger mt-4">
          Delete Subchapter
        </button>
      </form>
    </div>
  );
};

export default DeleteSubChapter;

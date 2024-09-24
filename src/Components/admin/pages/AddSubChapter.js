import React, { useState } from "react";

const AddSubChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [bookNumber, setBookNumber] = useState("");
  const [subChapterNumber, setSubChapterNumber] = useState("");
  const [content, setContent] = useState("");
  const [books, setBooks] = useState(["Book 1", "Book 2", "Book 3"]); // Static book data for selection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const subChapterData = {
      chapterNumber,
      bookNumber,
      subChapterNumber,
      content,
    };

    try {
      // Example of sending subchapter data to an API
      const response = await fetch("/api/subchapters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subChapterData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Subchapter added successfully:", result);

      // Reset form fields after successful submission
      setChapterNumber("");
      setBookNumber("");
      setSubChapterNumber("");
      setContent("");
    } catch (error) {
      console.error("Error adding subchapter:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add Subchapter</h3>
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

import React, { useState } from "react";

const AddChapter = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [bookName, setBookName] = useState("");
  const [chapterTitle, setChapterTitle] = useState("");
  const [books, setBooks] = useState(["Book 1", "Book 2", "Book 3"]); // Static book data for demonstration

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const chapterData = {
      chapterNumber,
      bookName,
      chapterTitle,
    };

    try {
      // Example of sending data to an API
      const response = await fetch("/api/chapters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chapterData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Chapter added successfully:", result);

      // Reset form fields after successful submission
      setChapterNumber("");
      setBookName("");
      setChapterTitle("");
    } catch (error) {
      console.error("Error adding chapter:", error);
    }
  };

  return (
    <div className=" container-fluid d-flex  justify-content-center align-items-center h-100">
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

          {/* Book Name (Select Field) */}
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

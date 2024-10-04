import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you are using React Router for dynamic routing

const UpdateChapter = () => {
  const { chapterId } = useParams(); // Get chapter ID from route params
  const [chapterNumber, setChapterNumber] = useState("");
  const [bookName, setBookName] = useState("");
  const [chapterTitle, setChapterTitle] = useState("");
  const [books, setBooks] = useState(["Book 1", "Book 2", "Book 3"]); // Static book data for demonstration

  // Fetch existing chapter data when the component mounts
  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await fetch(`/api/chapters/${chapterId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch chapter data");
        }
        const chapter = await response.json();
        setChapterNumber(chapter.chapterNumber);
        setBookName(chapter.bookName);
        setChapterTitle(chapter.chapterTitle);
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      }
    };

    fetchChapter();
  }, [chapterId]);

  // Handle form submission for updating the chapter
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedChapterData = {
      chapterNumber,
      bookName,
      chapterTitle,
    };

    try {
      const response = await fetch(`/api/chapters/${chapterId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedChapterData),
      });

      if (!response.ok) {
        throw new Error("Failed to update chapter");
      }

      const result = await response.json();
      console.log("Chapter updated successfully:", result);

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
            Update Chapter
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateChapter;

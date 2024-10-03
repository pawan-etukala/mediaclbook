import React, { useState } from "react";
import axios from "axios";

const UpdateImage = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [subChapterNumber, setSubChapterNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.put(
        `/admins/subchapter/image/update/${chapterNumber}/${subChapterNumber}`, // Use chapterNumber and subChapterNumber from state
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Image updated successfully!");
    } catch (error) {
      console.error("Error updating image:", error);
      alert("Error updating image. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Update Image</h3>
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
            value={subChapterNumber}
            onChange={(e) => setSubChapterNumber(e.target.value)}
            required
          />
        </div>

        {/* Image Upload Field */}
        <div className="form-group mt-3">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4">
          Update Image
        </button>
      </form>
    </div>
  );
};

export default UpdateImage;

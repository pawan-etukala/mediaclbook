import React, { useState } from "react";
import axios from "axios";

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [subchapter, setSubchapter] = useState("");
  const [chapter, setChapter] = useState("");
  const [subchapterTitle, setSubchapterTitle] = useState(""); // New state for subchapter title

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubchapterChange = (e) => {
    setSubchapter(e.target.value);
  };

  const handleChapterChange = (e) => {
    setChapter(e.target.value);
  };

  const handleSubchapterTitleChange = (e) => {
    setSubchapterTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    if (!subchapter) {
      alert("Please enter a subchapter number.");
      return;
    }

    if (!chapter) {
      alert("Please enter a chapter number.");
      return;
    }

    if (!subchapterTitle) {
      alert("Please enter a subchapter title.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("subchapterNumber", subchapter);
    formData.append("chapterId", chapter);
    formData.append("subchapterTitle", subchapterTitle); // Append subchapter title
    formData.append("contentType", "IMAGE");

    try {
      const response = await axios.post("/admins/subchapter/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        setImageUrl(response.data.imageUrl);
        alert("Image uploaded successfully!");
      } else {
        alert("Error uploading image.");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      alert("Error uploading image. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Upload Image</h3>

      <form onSubmit={handleSubmit}>
        {/* Chapter Input */}
        <div className="form-group mt-3">
          <label htmlFor="chapter">Chapter Number</label>
          <input
            type="number"
            className="form-control"
            id="chapter"
            value={chapter}
            onChange={handleChapterChange}
            required
          />
        </div>

        {/* Subchapter Input */}
        <div className="form-group mt-3">
          <label htmlFor="subchapter">Subchapter Number</label>
          <input
            type="number"
            className="form-control"
            id="subchapter"
            value={subchapter}
            onChange={handleSubchapterChange}
            required
          />
        </div>

        {/* Subchapter Title Input */}
        <div className="form-group mt-3">
          <label htmlFor="subchapterTitle">Subchapter Title</label>
          <input
            type="text"
            className="form-control"
            id="subchapterTitle"
            value={subchapterTitle}
            onChange={handleSubchapterTitleChange}
            required
          />
        </div>

        {/* Image File Input */}
        <div className="form-group">
          <label htmlFor="imageUpload">Select Image</label>
          <input
            type="file"
            className="form-control"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3">
          Upload Image
        </button>
      </form>

      {/* Display the image URL after successful upload */}
      {imageUrl && (
        <div className="mt-4">
          <h5>Uploaded Image URL:</h5>
          <p>{imageUrl}</p>
          <img src={imageUrl} alt="Uploaded" className="img-fluid" />
        </div>
      )}
    </div>
  );
};

export default AddImage;

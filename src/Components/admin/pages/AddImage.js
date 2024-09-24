import React, { useState } from "react";
import axios from "axios";

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [subchapter, setSubchapter] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubchapterChange = (e) => {
    setSubchapter(e.target.value);
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

    const formData = new FormData();
    formData.append("image", image);
    formData.append("subchapter", subchapter);

    try {
      const response = await axios.post("/api/uploadImage", formData, {
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

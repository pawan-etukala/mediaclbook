import React, { useState } from "react";
import axios from "axios";

const UpdateImage = () => {
  const [chapterNumber, setChapterNumber] = useState("");
  const [subChapterNumber, setSubChapterNumber] = useState("");
  const [imageNumber, setImageNumber] = useState("");
  const [image, setImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 'success' or 'danger'

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setAlertMessage("Please select an image to upload.");
      setAlertType("danger");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.put(
        `/admins/subchapter/image/${chapterNumber}/${subChapterNumber}/${imageNumber}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setAlertMessage("Image updated successfully!");
        setAlertType("success");
      }
    } catch (error) {
      console.error("Error updating image:", error);
      setAlertMessage("Error updating image. Please try again.");
      setAlertType("danger");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Update Image</h3>
      {alertMessage && (
        <div
          className={`alert alert-${alertType} alert-dismissible fade show`}
          role="alert"
        >
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertMessage("")}
          ></button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
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

        <div className="form-group mt-3">
          <label htmlFor="imageNumber">Image Number</label>
          <input
            type="number"
            className="form-control"
            id="imageNumber"
            placeholder="Enter image number"
            value={imageNumber}
            onChange={(e) => setImageNumber(e.target.value)}
            required
          />
        </div>

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

        <button type="submit" className="btn btn-primary mt-4">
          Update Image
        </button>
      </form>
    </div>
  );
};

export default UpdateImage;

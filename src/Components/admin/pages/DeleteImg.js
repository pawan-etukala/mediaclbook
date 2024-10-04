import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DeleteImg = () => {
  const { subChapterId } = useParams(); // Assuming you're passing the subChapterId via URL params
  const [subchapterNumber, setSubchapterNumber] = useState("");

  const handleDelete = async () => {
    if (!subchapterNumber) {
      alert("Please enter a subchapter number.");
      return;
    }

    if (window.confirm("Are you sure you want to delete the image for this subchapter?")) {
      try {
        const response = await axios.delete(`/api/subchapters/${subChapterId}/deleteImage`, {
          data: { subchapterNumber },
        });

        if (response.data) {
          alert("Image deleted successfully!");
          setSubchapterNumber(""); // Clear the input after successful deletion
        } else {
          alert("Error deleting image.");
        }
      } catch (error) {
        console.error("Error during image deletion:", error);
        alert("Error deleting image. Please try again.");
      }
    }
  };

  return (
    <div className="addimg container mt-5">
      <h3>Delete Image for Subchapter</h3>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Subchapter Number Input Field */}
        <div className="form-group mt-3">
          <label htmlFor="subchapterNumber">Subchapter Number</label>
          <input
            type="number"
            className="form-control"
            id="subchapterNumber"
            value={subchapterNumber}
            onChange={(e) => setSubchapterNumber(e.target.value)}
            required
          />
        </div>

        {/* Delete Button */}
        <button onClick={handleDelete} className="btn btn-danger mt-3">
          Delete Image
        </button>
      </form>
    </div>
  );
};

export default DeleteImg;

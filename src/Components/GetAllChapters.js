import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetAllChapters() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/admins/chapter/") // Replace with your actual API endpoint to fetch all chapters
      .then((response) => {
        setChapters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {chapters.map((chapter) => (
          <li
            key={chapter.id}
            onClick={() =>
              navigate(`/admin/viewContent/${chapter.chapterNumber}`)
            }
          >
            {`Chapter ${chapter.chapterNumber}: ${chapter.title}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetAllChapters;

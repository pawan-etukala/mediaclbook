import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewContent() {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admins/chapter/5") // Replace with your actual API endpoint
      .then((response) => {
        setChapter(response.data);
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
      <h1>{`chapter number : ${chapter.chapterNumber}  ${chapter.title}`}</h1>
      <p>{chapter.content}</p>
      <h2>Subchapters</h2>
      <ul>
        {chapter.subChapters.map((subchapter, index) => (
          <li key={index}>
            {subchapter.contentType === "TEXT" ? (
              <>
                <h4>{subchapter.subchapterTitle}</h4>
                <p>{subchapter.content}</p>
              </>
            ) : (
              <>
                <h4>{subchapter.subchapterTitle}</h4>
                <img
                  src={`assets/${subchapter.content}`}
                  alt={subchapter.subchapterTitle}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewContent;

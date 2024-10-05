import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admins/chapter/1'); // Replace with your actual API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching the chapters:', error);
      }
    };

    fetchChapters();
  }, []);

  const renderContent = (subChapters) => {
    return subChapters.map((subChapter, i) => (
      <div key={i} className="mb-3">
        <h4>{subChapter.subchapterTitle}</h4>
        {subChapter.contentType === 'text' ? (
          <p>{subChapter.content}</p>
        ) : (
          <img src={subChapter.content} alt={subChapter.subChapterName} className="img-fluid" />
        )}
      </div>
    ));
  };

  return (
    <div className="container">
      <h1 className="my-4">Chapter</h1>
      {data ? (
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            {data.subChapters && renderContent(data.subChapters)}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContentView;

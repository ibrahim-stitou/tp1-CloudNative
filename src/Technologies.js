// src/Technologies.js
import React, { useState, useEffect } from 'react';

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch('http://localhost:3004/technologies');
        
        if (!response.ok) {
          throw new Error(`Error fetching technologies: ${response.statusText}`);
        }

        const data = await response.json();
        setTechnologies(data.technologies);
      } catch (error) {
        console.error('Error fetching technologies:', error.message);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <div>
      <h2>List of Technologies</h2>
      <ul>
        {technologies.map((tech) => (
          <li key={tech.id}>
            {tech["Nom de la technologie"]} - {tech.Domaine} ({tech["Date de création"]})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;

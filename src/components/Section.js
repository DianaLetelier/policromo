// src/components/Section.js

import React from 'react';

const Section = ({ name, color }) => {
  const sectionStyle = {
    backgroundColor: color,
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    marginBottom: '10px',
  };

  return <div style={sectionStyle}>{name}</div>;
};

export default Section;


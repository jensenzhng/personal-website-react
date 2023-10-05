import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe 
          src="../images/resume.pdf" 
          width="100%" 
          height="100%" 
          frameBorder="0"
          title="Resume"
          allowFullScreen
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href="../images/resume.pdf">Download PDF</a>
        </iframe>
      </div>
    );
  }
}

export default Resume;

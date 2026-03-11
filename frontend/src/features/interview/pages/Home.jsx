import React from "react";
import "../styles/style.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="container">
        
        {/* Hero Section */}
        <div className="hero">
          <h1>
            Create Your Custom <span>Interview Plan</span>
          </h1>
          <p>
            Let our AI analyze the job requirements and your unique profile
            to build a winning strategy.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="main-card">
          <div className="card-content">
            
            {/* LEFT SIDE: Target Job Description */}
            <div className="left-panel">
              <div className="section-header">
                <div className="header-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <span>Target Job Description</span>
                </div>
                <span className="badge required">REQUIRED</span>
              </div>

              <div className="textarea-wrapper">
                <textarea
                  name="jobDescription"
                  id="jobDescription"
                  placeholder="Paste the full job description here...&#10;e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
                />
                <div className="char-count">0 / 5000 chars</div>
              </div>
            </div>

            {/* RIGHT SIDE: Your Profile */}
            <div className="right-panel">
              <div className="section-header">
                <div className="header-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Your Profile</span>
                </div>
              </div>

              {/* Upload Section */}
              <div className="input-group">
                <div className="label-wrapper">
                  <label>Upload Resume</label>
                  <span className="badge best-results">BEST RESULTS</span>
                </div>
                
                <div className="upload-box">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                  />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2d78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <p>Click to upload or drag & drop</p>
                  <span className="file-hint">PDF or DOCX (Max 5MB)</span>
                </div>
              </div>

              <div className="divider">
                <span>OR</span>
              </div>

              {/* Self Description Section */}
              <div className="input-group">
                <label htmlFor="selfDescription">Quick Self-Description</label>
                <textarea
                  className="pink-border"
                  name="selfDescription"
                  id="selfDescription"
                  placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                />
              </div>

              {/* Info Note */}
              <div className="info-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <p>Either a <b>Resume</b> or a <b>Self Description</b> is required to generate a personalized plan.</p>
              </div>
            </div>

          </div>

          {/* Card Footer */}
          <div className="card-footer">
            <div className="footer-text">
              AI-Powered Strategy Generation • Approx 30s
            </div>
            <button className="generate-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Generate My Interview Strategy
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;
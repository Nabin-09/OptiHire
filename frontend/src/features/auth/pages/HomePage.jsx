import { useAuth } from "../hooks/useAuth";
import "./homepage.scss";

const HomePage = () => {
  const { user, handleLogout } = useAuth();

  return (
    <main className="home">
      <nav className="navbar">
        <h1 className="logo">Optihire</h1>
        <div className="nav-right">
          <span className="username">Hi, {user?.username}</span>
          <button className="button secondary-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <section className="hero">
        <h2>
          Create <span>ATS-Optimized</span> Resumes
        </h2>
        <p>
          Transform your CV using job descriptions and generate 
          recruiter-ready resumes tailored for every role.
        </p>

        <div className="cta-group">
          <button className="button primary-button">
            Generate Resume
          </button>
          <button className="button secondary-button">
            Upload CV
          </button>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h3>Smart JD Matching</h3>
          <p>
            Extract keywords from job descriptions and optimize
            your resume for ATS systems.
          </p>
        </div>

        <div className="card">
          <h3>ATS Score</h3>
          <p>
            Get a real-time compatibility score and improve
            weak sections instantly.
          </p>
        </div>

        <div className="card">
          <h3>One-Click Export</h3>
          <p>
            Download clean, recruiter-friendly PDFs in seconds.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
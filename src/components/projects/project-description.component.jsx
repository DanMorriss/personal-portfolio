import "./project-description.styles.css";

const ProjectDescription = () => {
  return (
    <div className="project-description">
      <a
        href="https://pp5-highlights-a86c2f8f4016.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
        className="project-title-link"
      >
        <h1 className="project-title flicker-1">Highlights</h1>
      </a>
      <h2>Social Network</h2>
      <p>
        A photo sharing social media platform. Inspired by the principles of the
        Five Minute Journal, the platform provides users with a space to share
        the highlights of their day and connect with other.
      </p>
    </div>
  );
};

export default ProjectDescription;

import { Col } from "react-bootstrap";
import './ProjectCard.css'

function ProjectCard({ title, description, imgUrl, Url }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="des">{description}</span>
          <a className="taa" href={Url} target="_blank" rel="noopener noreferrer">
            <span className="tagline"></span>
            <span className="tagline"></span>
            <span className="tagline"></span>
            <span className="tagline"></span>Code GitHub
          </a>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;

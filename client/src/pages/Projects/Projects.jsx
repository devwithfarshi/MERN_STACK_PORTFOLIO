import { Typography } from "@mui/material";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FaRegSmileWink } from "react-icons/fa";
const Projects = ({ projects }) => {
  return (
    <div className='projects'>
      <Typography variant='h3'>
        Projects <AiOutlineProject />
      </Typography>
      <div className='projectsWrapper'>
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>
      <Typography
        variant='h3'
        className='bottomHeading'
        style={{ font: "100 1.2rem 'Ubuntu Mono'" }}
      >
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;

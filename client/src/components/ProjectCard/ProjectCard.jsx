import { Button, Typography } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../action/user";
const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a
        href={url}
        className='projectCard'
        target='black'
      >
        <div>
          <img
            src={projectImage}
            alt='Project'
          />
          <Typography variant='h5'>{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant='h4'> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant='h6'>Tech Stack: {technologies}</Typography>
          <a
            href={url}
            target='black'
            style={{ textDecoration: "none" }}
          >
            <button className='projectCardViewDemoBtn'>View Demo</button>
          </a>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

export default ProjectCard;

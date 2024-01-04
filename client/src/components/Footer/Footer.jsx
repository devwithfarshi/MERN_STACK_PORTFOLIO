import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
import { useState } from "react";

const Footer = ({ about }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const text = about.description;
  const showMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className='footer'>
      <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography fontSize={isShowMore && "14px"}>
          {isShowMore ? `Greetings, ${text}..` : `${text.slice(0, 95)} ...`}
          <span
            onClick={showMore}
            className='showBtn'
          >
            {!isShowMore ? "show more" : "hide"}
          </span>
        </Typography>

        <Link
          to='/contact'
          className='footerContactBtn'
        >
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant='h6'>Social Media</Typography>
        <div className='socialLinks'>
          <a
            href='https://github.com/devwithfarshi/'
            target='black'
          >
            <BsGithub />
          </a>

          <a
            href='https://www.instagram.com/__sf.__.salman___/'
            target='black'
          >
            <BsInstagram />
          </a>
          <a
            href='https://www.linkedin.com/in/salman-farshi-a7b8b5254/'
            target='black'
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

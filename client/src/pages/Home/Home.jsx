import { useEffect, useState } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../image/moon.jpg";
import venusImage from "../../image/venus.jpg";
import spaceImage from "../../image/space.jpg";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import TimeLine from "../../components/TimeLine/TimeLine";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
const Home = ({ user }) => {
  const nameArray = user.name.split(" ")[0].split("");
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>

      <div className='homeCanvasContainer'>
        <Typography
          style={{ textTransform: "uppercase" }}
          variant='h1'
        >
          {nameArray ? (
            nameArray.map((v) => <p>{v}</p>)
          ) : (
            <>
              <p>n</p>
              <p>a</p>
              <p>m</p>
              <p>e</p>
            </>
          )}
        </Typography>

        <div className='homeCanvasBox'>
          <Typography variant='h2'>DESIGNER</Typography>
          <Typography variant='h2'>DEVELOPER</Typography>
          <Typography variant='h2'>TEACHER</Typography>
        </div>

        <Link to='/projects'>VIEW WORK</Link>
      </div>

      <div className='homeScrollBtn'>
        <MouseOutlined />
      </div>
      <div className='homeContainer'>
        <Typography variant='h3'>TIMELINE</Typography>
        <TimeLine timelines={user.timeline} />
      </div>
      <div className='homeSkills'>
        <Typography variant='h3'>SKILLS</Typography>
        <div className='homeCubeSkills'>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace1'>
            <img
              src={user.skills.image1.url}
              alt='face 1'
            />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace2'>
            <img
              src={user.skills.image2.url}
              alt='face 1'
            />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace3'>
            <img
              src={user.skills.image3.url}
              alt='face 1'
            />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace4'>
            <img src={user.skills.image4.url} />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace5'>
            <img
              src={user.skills.image5.url}
              alt='face 1'
            />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace6'>
            <img
              src={user.skills.image6.url}
              alt='face 1'
            />
          </div>
        </div>

        <div className='cubeShadow'></div>
        <div
          className='homeskillsBox'
          id='homeskillsBox'
        >
          <Tooltip
            title='Python'
            placement='left-start'
          >
            <IconButton>
              <SiPython />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='HTML 5'
            placement='left-start'
          >
            <IconButton>
              <SiHtml5 />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='CSS 3'
            placement='left-start'
          >
            <IconButton>
              <SiCss3 />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='JavaScript'
            placement='left-start'
          >
            <IconButton>
              <SiJavascript />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='MongoDB'
            placement='left-start'
          >
            <IconButton>
              <SiMongodb />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='Next.JS'
            placement='left-start'
          >
            <IconButton>
              <SiNextdotjs />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='React.JS'
            placement='left-start'
          >
            <IconButton>
              <SiReact />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='Express'
            placement='left-start'
          >
            <IconButton>
              <SiExpress />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Home;

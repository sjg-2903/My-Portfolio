import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SOCIAL_LINKS } from '../utils/Utilities';
import IMAGES from '../utils/Images';
import gsap from 'gsap';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 4,
    py: 8,
    overflowX: 'hidden',
    fontFamily: 'Inter, sans-serif',
  },
  innerWrapper: {
    maxWidth: '1440px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    alignItems: 'center',
  },
  textBox: {
    maxWidth: '800px',
    textAlign: { xs: 'center', md: 'left' },
  },
  heading: {
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 'bold',
    maxWidth: { xs: '90%', sm: '85%', md: '100%' },
    mx: { xs: 'auto', md: 0 },
    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
  },
  description: {
    mt: 2,
    color: '#555',
    lineHeight: 1.8,
    fontFamily: 'Inter, sans-serif',
    textAlign: 'justify',
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
    maxWidth: { xs: '90%', sm: '85%', md: '90%', lg: "100%" },
    mx: { xs: 'auto', md: 0 },
  },

  iconStack: {
    mt: { xs: 2, sm: 3, md: 4 },
    maxWidth: { xs: '90%', sm: '85%', md: '100%' },
    mx: { xs: 'auto', md: 0 },
  },
  imageBox: {
    mb: { xs: 5, md: 0 },
    width: { xs: '100%', md: '40%' },
    display: 'flex',
    justifyContent: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: { xs: 200, sm: 220, md: 250, lg: 300 },
    height: { xs: 200, sm: 220, md: 250, lg: 300 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowBox: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)',
    opacity: 0.8,
    borderRadius: 2,
    zIndex: 1,
  },
  profileImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 2,
    zIndex: 2,
  },
  emojiImage: {
    width: { xs: 30, sm: 35, md: 40, lg: 50 },
    height: 'auto',
    verticalAlign: 'middle',
  },
};

const Home = () => {
  const textBoxRef = useRef(null);
  const imageBoxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.fromTo(
      textBoxRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 }
    ).fromTo(
      imageBoxRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.8'
    );
  }, []);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerWrapper}>
        <Box sx={styles.textBox} ref={textBoxRef}>
          <Typography variant="h3" sx={styles.heading}>
            Hi, I’m Shubh&nbsp;
            <Box
              component="img"
              src="https://em-content.zobj.net/thumbs/240/whatsapp/326/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png"
              alt="Technologist Emoji"
              sx={styles.emojiImage}
            />
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            Welcome to my portfolio! I’m a passionate Full Stack Developer with a solid foundation in Computer Science & Engineering. I build clean, scalable, and responsive web and mobile applications that deliver excellent user experiences. I’m dedicated to solving complex challenges, writing efficient code, and staying updated with the latest technologies. Feel free to explore my work, learn more about my skills, and get in touch to discuss how we can create impactful solutions together.
          </Typography>
          <Stack direction="row" spacing={3} sx={styles.iconStack}>
            <GitHubIcon
              fontSize="medium"
              onClick={() => window.open(SOCIAL_LINKS.github, '_blank', 'noopener,noreferrer')}
              sx={{
                cursor: 'pointer',
                transition: 'color 0.3s ease, transform 0.3s ease',
                '&:hover': { color: '#333', transform: 'scale(1.2)' },
              }}
            />
            <InstagramIcon
              fontSize="medium"
              onClick={() => window.open(SOCIAL_LINKS.instagram, '_blank', 'noopener,noreferrer')}
              sx={{
                cursor: 'pointer',
                transition: 'color 0.3s ease, transform 0.3s ease',
                '&:hover': { color: '#E1306C', transform: 'scale(1.2)' },
              }}
            />
            <LinkedInIcon
              fontSize="medium"
              onClick={() => window.open(SOCIAL_LINKS.linkedin, '_blank', 'noopener,noreferrer')}
              sx={{
                cursor: 'pointer',
                transition: 'color 0.3s ease, transform 0.3s ease',
                '&:hover': { color: '#0077b5', transform: 'scale(1.2)' },
              }}
            />
          </Stack>
        </Box>
        <Box sx={styles.imageBox} ref={imageBoxRef}>
          <Box sx={styles.imageWrapper}>
            <Box sx={styles.shadowBox} />
            <Box
              component="img"
              src={IMAGES.profile}
              alt="Profile"
              sx={styles.profileImage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

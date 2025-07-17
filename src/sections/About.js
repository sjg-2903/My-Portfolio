import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';
import IMAGES from '../utils/Images';

const styles = {
  container: {
    px: { xs: 2, sm: 6 },
    py: 8,
    bgcolor: '#f7f9fc',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'inline-block',
    px: 2,
    py: 0.5,
    fontFamily: "'ZapfHumnst BT', sans-serif",
    borderRadius: '999px',
    bgcolor: '#f2f2f2',
    color: '#333',
    fontSize: '1rem',
    mb: 4,
    textAlign: 'center',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1200,
  },
  innerImageBox: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageShadow: {
    position: 'absolute',
    top: 20,
    left: -20,
    width: '100%',
    height: '100%',
    bgcolor: '#e9e9e9',
    zIndex: 0,
  },
  profileImage: {
    position: 'relative',
    width: '80%', // Reduced size, keeps aspect ratio
    height: 'auto',
    zIndex: 1,
    borderRadius: 2,
  },
  imageBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '100%', md: '40%' },  // 50% on medium+ screens
    minHeight: 480,
    mx: { xs: 'auto', md: 0 },
  },

  textSection: {
    width: { xs: '100%', md: '60%' },
    justifyContent: 'center',
    alignItems: 'center',
  },

  listBox: {
    display: 'flex',
    gap: 4,
    flexWrap: 'wrap',
  },
  italicNote: {
    mt: 3,
    fontStyle: 'italic',
    fontFamily: "Sora"
  },
  aboutMe: {
    width: '200px',
    mx: 'auto',
    mb: 4
  },
  textJustified: {
    mb: 2,
    fontSize: '1rem',
    textAlign: 'justify',
    fontFamily: "Sora"
  },
  

};

const About = () => {
  return (
    <Box id="about" sx={styles.container}>
      <Box sx={styles.aboutMe}>
        <Box sx={styles.label}>ABOUT ME</Box>
      </Box>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.imageBox}>

          <Box
            sx={{
              position: 'absolute',
              top: 25,
              left: 10,
              width: '80%', // Match image width
              height: '100%',
              bgcolor: '#e9e9e9',
              zIndex: 0,
              borderRadius: 2,
            }}
          />
          <Box
            component="img"
            src={IMAGES.about}
            alt="Profile"
            sx={styles.profileImage}
          />
        </Box>

        <Box sx={styles.textSection}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, fontFamily: "Sora" }}>
            Want to know me better? Here it is:
          </Typography>

          <Typography variant="body1" sx={styles.textJustified}>
            I'm a passionate full stack developer with a creative edge, currently working at Briotechno Pvt. Ltd. after completing a successful six-month internship there. My development journey began in 2021, when I started pursuing a Bachelor's in Computer Engineering at LJ Institute of Engineering & Technology, and I've been building and growing ever since.
          </Typography>

          <Typography variant="body1" sx={styles.textJustified}>
            In 2023, I stepped into the professional world through an internship at Briotechno, where I honed my skills in React.js, React Native, Node.js, and MongoDB. After proving my capabilities, I transitioned into a Full Stack Developer role, which I currently hold. My role involves bringing both technical and visual aspects of web and mobile applications to life — and I absolutely thrive on it.
          </Typography>

          <Typography variant="body1" sx={styles.textJustified}>
            I'm highly enthusiastic about user experience, pixel-perfect UI design, and writing clean, maintainable code. I enjoy working on products from the ground up — from conceptualizing ideas and designing UIs to building scalable backends and deploying fully functional apps.
          </Typography>

          <Typography variant="body1" sx={styles.textJustified}>
            Outside of development, I have a passion for video editing and am experienced with tools like Canva and VN Editor, among others. I enjoy combining my technical and creative skills — whether it's building interactive user interfaces or editing crisp, engaging videos.
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 , fontFamily : "Sora",  fontSize: '1rem'}}>
            Finally, some quick bits about me:
          </Typography>

          <Box sx={styles.listBox}>
            <List dense>
              <ListItem>
                <ListItemText primary="🎓 B.E. in Computer Science & Engineering" />
              </ListItem>
              <ListItem>
                <ListItemText primary="📚 Lifelong Learner & Tech Explorer" />
              </ListItem>
            </List>
            <List dense>
              <ListItem>
                <ListItemText primary="🧑‍💻 Full Stack Developer" />
              </ListItem>
              <ListItem>
                <ListItemText primary="🎥 Passionate & Skilled Video Editor" />
              </ListItem>
            </List>
          </Box>
          <Typography variant="body2" sx={styles.italicNote}>
            Got a project in mind? Whether it's a stunning website 🌐, a powerful mobile app 📱, or sleek video editing 🎬 — I’m here to help bring your ideas to life. Let’s build something awesome together!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

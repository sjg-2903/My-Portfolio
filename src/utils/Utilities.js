export const downloadCV = () => {
  const link = document.createElement('a');
  link.href = process.env.PUBLIC_URL + '/Shubh-Gandhi-CV.pdf';
  link.download = 'Shubh_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const SOCIAL_LINKS = {
  github:   'https://github.com/sjg-2903',
  instagram:'https://www.instagram.com/_shubh_2903',
  linkedin: 'https://www.linkedin.com/in/shubhgandhi2903',
};
import skyline from '@/assets/skyline.jpg';
import { Navbar } from '@/components';
import { Navlinks } from '@/components/Layout/Navbar';
import { NAVBAR_HEIGHT } from '@/components/Layout/Navbar/Navbar';
import { Stack, Typography, useMediaQuery, useTheme } from '@suid/material';

const Home = () => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));
  const isAboveSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {isAboveMD() && <Navbar />}
      <Stack
        spacing={5}
        pt={5}
        sx={{
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          backgroundImage: `url(${skyline})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundColor: theme.palette.background.default,
          backgroundBlendMode: 'multiply'
        }}
      >
        <Typography textAlign="center" variant={isAboveMD() ? 'h1' : isAboveSM() ? 'h2' : 'h3'}>
          Hi! I'm Jason Cheung
        </Typography>
        <Stack spacing={1}>
          <Typography textAlign="center" variant={isAboveMD() ? 'body2' : 'subtitle2'}>
            Computer Science Student @ Northeastern University
          </Typography>
          {/* <Typography textAlign="center" variant={isAboveMD() ? 'body1' : 'subtitle1'}>
            Former Software Engineer Co-op @ Motorola Solutions
          </Typography> */}
        </Stack>
        {!isAboveMD() && <Navlinks direction="column" />}
      </Stack>
    </>
  );
};

export default Home;

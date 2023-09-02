import { getCurrentPosition, getPreviousCareers } from '@/api';
import { theme } from '@/stores';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@suid/material';
import { Component, For, createResource } from 'solid-js';

import CurrentPositionSkeleton from './CurrentPositionSkeleton';
import PreviousCareersSkeleton from './PreviousCareersSkeleton';

const MIN_INTRO_CARD_HEIGHT = '20rem';
const INTRO_CARD_HEIGHT = '100%';

const IntroCard: Component = () => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  const [currentPosition] = createResource(getCurrentPosition);
  const [previousCareers] = createResource(getPreviousCareers);

  return (
    <Box class="gradient-border" minHeight={MIN_INTRO_CARD_HEIGHT} height={INTRO_CARD_HEIGHT}>
      <Stack direction="column" justifyContent="center" height="100%" p={5} spacing={5}>
        <Stack direction="column">
          <Typography variant={isAboveMD() ? 'h1' : 'h2'}>👋 Hi! I'm Jason</Typography>
          {currentPosition() ? (
            <Typography variant={isAboveMD() ? 'body1' : 'subtitle1'}>
              {currentPosition()}
            </Typography>
          ) : (
            <CurrentPositionSkeleton />
          )}
        </Stack>
        <Stack direction="column" spacing={0}>
          <Typography variant={isAboveMD() ? 'h2' : 'h3'} pt={2}>
            Previously
          </Typography>
          <For each={previousCareers()} fallback={<PreviousCareersSkeleton />}>
            {({ title, company }) => (
              <Typography variant={isAboveMD() ? 'body1' : 'subtitle1'}>
                {title} @ {company}
              </Typography>
            )}
          </For>
        </Stack>
      </Stack>
    </Box>
  );
};

export default IntroCard;

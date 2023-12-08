import { GITHUB_LINK, LINKEDIN_LINK } from "@/constants";
import { Paths } from "@/enums";
import { resume } from "@/stores";
import { useNavigate } from "@solidjs/router";
import {
  Button,
  CircularProgress,
  Stack,
  Typography,
  useTheme
} from "@suid/material";
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon
} from "solid-icons/ai";
import { IoDocumentTextSharp as DocumentIcon } from "solid-icons/io";
import type { Component } from "solid-js";

import IconButton from "../IconButton";
import { createMediaQuery } from "@solid-primitives/media";
import { redirect } from "solid-start";

interface Props {
  direction?: "row" | "column";
  disableProjects?: boolean;
}

const Navlinks: Component<Props> = ({
  direction = "row",
  disableProjects = false
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAboveMD = createMediaQuery(
    theme.breakpoints.up("md").replace("@media ", "")
  );

  const onProjectsClick = async () => {
    navigate(Paths.projects);
  };

  return (
    <Stack
      direction={direction}
      alignItems="center"
      spacing={direction === "column" ? 3 : 1}
    >
      {!disableProjects && (
        <Button
          onClick={onProjectsClick}
          sx={{
            px: 2,
            py: 1,
            border: `1px solid ${theme.palette.text.primary}`
          }}
        >
          <Typography
            variant={isAboveMD() ? "body1" : "subtitle1"}
            textTransform="none"
          >
            Projects
          </Typography>
        </Button>
      )}
      <Stack direction="row" spacing={1}>
        <IconButton href={Paths.resume} target="_blank">
          <DocumentIcon fill={theme.palette.text.primary} />
        </IconButton>

        <IconButton href={GITHUB_LINK} target="_blank">
          <GithubIcon fill={theme.palette.text.primary} />
        </IconButton>
        <IconButton href={LINKEDIN_LINK} target="_blank">
          <LinkedinIcon fill={theme.palette.text.primary} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navlinks;

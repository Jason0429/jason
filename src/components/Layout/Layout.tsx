import { Stack, useTheme } from "@suid/material";
import { type Component, JSX } from "solid-js";
import { createMediaQuery } from "@solid-primitives/media";

interface Props {
  children?: JSX.Element;
}

const Layout: Component<Props> = ({ children }) => {
  const theme = useTheme();
  const isAboveMD = createMediaQuery(
    theme.breakpoints.up("md").replace("@media ", "")
  );

  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: isAboveMD() ? 15 : 2,
        backgroundColor: theme.palette.background.default
      }}
    >
      {children}
    </Stack>
  );
};

export default Layout;

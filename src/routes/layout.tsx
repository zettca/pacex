import { Outlet } from "react-router-dom";
import { Box, Card, Container } from "@mui/material";
import { useIntervalValue } from "~/hooks/useIntervalValue";
import { random } from "~/utils";

export const Component = () => {
  const bgNum = useIntervalValue(() => random(3), 20_000, 0);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        minHeight: "100dvh",
        background: `url(img/bg${bgNum}.jpg) center no-repeat fixed`,
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ margin: "auto", width: "100vw" }}>
        <Card>
          <Outlet />
        </Card>
      </Container>
    </Box>
  );
};

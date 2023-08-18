import { Box, Card, CardContent, Container } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";

export const loader = () => {
  const num = Math.floor(Math.random() * 3);

  return { bgUrl: `img/bg${num}.jpg` };
};

export const Component = () => {
  const { bgUrl } = useLoaderData() as ReturnType<typeof loader>;

  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          minHeight: "100dvh",
          background: `url(${bgUrl}) center no-repeat fixed`,
          backgroundSize: "cover",
        }}
      >
        <Container style={{ margin: "auto", width: "100vw" }}>
          <Card>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 3, p: 3 }}
            >
              <Outlet />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

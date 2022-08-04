import React from "react";
import { Box, Card, CardContent, Container } from "@mui/material";

const withLayout =
  <P extends Record<string, unknown>>(
    Component: React.ComponentType<P>,
  ): React.FC<P> =>
  (props: P) => {
    const num = Math.floor(Math.random() * 3);

    return (
      <Box
        component="main"
        sx={{
          display: "flex",
          minHeight: "100vh",
          background: `url(img/bg${num}.jpg) center no-repeat fixed`,
          backgroundSize: "cover",
        }}
      >
        <Container style={{ margin: "auto", width: "100vw" }}>
          <Card>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 3, p: 3 }}
            >
              <Component {...props} />
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  };

export default withLayout;

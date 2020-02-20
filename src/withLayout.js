import React from "react";
import { Box, Card, CardContent, Container } from "@material-ui/core";

const withLayout = Component => {
  const num = Math.floor(Math.random() * 7);
  const bgStyles = {
    background: `url(img/bg${num}.jpg) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <main style={bgStyles}>
      <Box pt={4}>
        <Container>
          <Card>
            <CardContent>
              <Component />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </main>
  );
};

export default withLayout;

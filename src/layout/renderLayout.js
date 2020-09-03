import React from "react";
import { Card, CardContent, Container } from "@material-ui/core";

const withLayout = element => {
  const num = Math.floor(Math.random() * 7);
  const bgStyles = {
    background: `url(img/bg${num}.jpg) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
  };

  return (
    <main style={bgStyles}>
      <Container style={{ margin: "auto", width: "100vw" }}>
        <Card>
          <CardContent>{element}</CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default withLayout;

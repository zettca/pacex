import React from "react";
import { Card, CardContent, Container } from "@material-ui/core";

const withLayout = Component => (
  <main style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
    <Container>
      <Card>
        <CardContent>
          <Component />
        </CardContent>
      </Card>
    </Container>
  </main>
);

export default withLayout;

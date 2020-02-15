import React from "react";
import {
  Card,
  CardContent,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const withLayout = Component => (
  <main>
    <AppBar color="inherit" position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Container style={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <Component />
        </CardContent>
      </Card>
    </Container>
  </main>
);

export default withLayout;

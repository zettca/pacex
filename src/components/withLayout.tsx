import React from "react";
import { Card, CardContent, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
  },
  card: {
    padding: theme.spacing(3),
    gap: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
}));

const withLayout =
  <P extends Record<string, unknown>>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    const classes = useStyles();
    const num = Math.floor(Math.random() * 3);

    return (
      <main className={classes.root} style={{ backgroundImage: `url(img/bg${num}.jpg)` }}>
        <Container style={{ margin: "auto", width: "100vw" }}>
          <Card>
            <CardContent className={classes.card}>
              <Component {...props} />
            </CardContent>
          </Card>
        </Container>
      </main>
    );
  };

export default withLayout;

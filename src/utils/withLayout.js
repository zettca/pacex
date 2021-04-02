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
  },
}));

const withLayout = (Component) => (props) => {
  const classes = useStyles();
  const num = Math.floor(Math.random() * 7);

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

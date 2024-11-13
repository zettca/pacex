import { Outlet } from "react-router";
import { Card, Container } from "@mui/material";
import { useIntervalValue } from "~/hooks/useIntervalValue";
import { random } from "~/utils";

export const Component = () => {
  const bgNum = useIntervalValue(() => random(3), 20_000, 0);

  return (
    <main
      className="flex bg-center bg-cover bg-no-repeat bg-fixed min-h-[100dvh]"
      style={{ backgroundImage: `url(img/bg${bgNum}.jpg)` }}
    >
      <Container className="m-auto w-screen">
        <Card>
          <Outlet />
        </Card>
      </Container>
    </main>
  );
};

import { Outlet } from "react-router";
import { Card, Container } from "@mui/material";
import { random } from "~/utils";

const bgNum = random(3);

export function Component() {
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
}

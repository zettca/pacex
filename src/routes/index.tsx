import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { Main } from "~/components/Main";
import { useSetParams } from "~/hooks/useSetParams";
import type { CalcParams, Unit } from "~/types";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const { lock, time, dist, speed } = Object.fromEntries(searchParams);

  return {
    lock: (lock as Unit) || "speed",
    time: Number(time) || 1800,
    dist: Number(dist) || 5000,
    speed: Number(speed) || 10000,
  } satisfies CalcParams;
};

export const Component = () => {
  const setParams = useSetParams();
  const loaderData = useLoaderData() as ReturnType<typeof loader>;

  return (
    <Main
      data={loaderData}
      onCommit={(params) => {
        setParams({ ...params, [params.lock]: null });
      }}
    />
  );
};

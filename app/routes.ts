import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("noise-machine", "routes/noiseMachine.tsx")
] satisfies RouteConfig;

import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("noise-machine", "routes/noiseMachine.tsx"),
  route('plate-calculator', 'routes/plateCalculator.tsx')
] satisfies RouteConfig

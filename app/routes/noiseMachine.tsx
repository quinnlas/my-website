import type { Route } from "./+types/home";
import { NoiseMachine } from "../noiseMachine/noiseMachine";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quinn Las | Adaptive Noise Machine" },
    { name: "description", content: "Adaptive Noise Machine" },
  ];
}

export default function Home() {
  return <NoiseMachine />;
}

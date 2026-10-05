import type { Route } from "./+types/home"
import { PlateCalculator } from "../plateCalculator/plateCalculator"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quinn Las | Plate Calculator" },
    { name: "description", content: "Plate Calculator" },
  ]
}

export default function CreatePlateCalculator() {
  return <PlateCalculator />
}

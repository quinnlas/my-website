import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { LandingPage } from "../landingPage/landingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quinn Las - Full Stack Dev" },
    { name: "description", content: "Quinn's website." },
  ];
}

export default function Home() {
  return <LandingPage />;
  // return <Welcome />;
}

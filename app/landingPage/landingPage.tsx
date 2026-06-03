import portrait from "./portrait.jpg";

export function LandingPage() {
  return (
    <div>
      <nav>
        <p>Quinn Las</p>
      </nav>
      <img
        src={portrait}
        alt="Quinn's Portrait"
      />
      <h1>I'm Quinn, a software developer in Minneapolis.</h1>
      <p>I have 4 years of experience in web development and 3 in SQA. Check out my projects and experience, or get in touch.</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/quinnlas/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/quinnlas">GitHub</a>
        </li>
      </ul>
      <h1>Projects</h1>
      <h2>City Learner</h2>
      <p>
        A React project that draws the map of a city with a configurable level of detail. <a href="https://quinnlas.github.io/city-learner/">Try it!</a>
      </p>
      <h2>This website!</h2>
      <p>
        This website is built with React. Check out the <a href="https://github.com/quinnlas/my-website">source code</a>.
      </p>
    </div>
  );
}

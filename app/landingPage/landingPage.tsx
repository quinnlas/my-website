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
      <p>I have 4 years of experience in web development and 3 in SQA. Check out my projects and experience, download my resume, or get in touch.</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/quinnlas/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/quinnlas">GitHub</a>
        </li>
      </ul>
      <h1>Experience</h1>
      <h2>Voxtelesys - Full Stack Developer</h2>
      <p>
        Working at a small business, I wore a lot of hats. I was the lead developer for the employee web portal and also built the internal ticketing system, among other things:
      </p>
      <ul>
        <li>Developed customer and employee portals with Vue 2/Node.js, reducing support calls and increasing resolution speed.</li>
        <li>Created Node.js/MongoDB/Elasticsearch ticketing system with email and calendar integration, enabling support team organization and communication.</li>
        <li>Created Electron desktop application to spin up and configure VMs, saving support team time.</li>
      </ul>
      <h2>Open Systems International - Software Quality Engineer</h2>
      <p>
        At OSI, I support the SQA team by managing the complex environments needed for testing power grid software.
      </p>
      <ul>
        <li>Maintain daily build system for SQA testing with Jenkins and Python.</li>
        <li>Save on cost of quality by finding key defects and driving resolution.</li>
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

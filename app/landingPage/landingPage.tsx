import portrait from "./portrait.jpg";

export function LandingPage() {
  return (
    <div className="py-12 px-20">
      {/* nav bar */}
      <nav className="mb-12 flex justify-between">
        <p className="text-xl">Quinn Las</p>
        <div className="flex gap-3">
          <a className="hover:text-sky-500" href="#contact">Contact</a>
          <a className="hover:text-sky-500" href="#experience">Experience</a>
          <a className="hover:text-sky-500" href="#projects">Projects</a>
        </div>
      </nav>

      <main>

        {/* about section */}
        <div className="flex">
          <img
            className="max-w-120"
            src={portrait}
            alt="Quinn's Portrait"
          />
          <div className="px-10">
            <h1 className="text-xl pb-10">I'm Quinn, a software developer in Minneapolis.</h1>
            <p>I have 4 years of experience in web development and 3 in SQA. Check out my projects and experience, download my resume, or get in touch.</p>
            <ul id="contact" className="pt-5">
              <li>
                <a className="hover:text-sky-500" href="https://www.linkedin.com/in/quinnlas/">LinkedIn</a>
              </li>
              <li>
                <a className="hover:text-sky-500" href="https://www.github.com/quinnlas">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        {/* experience */}
        <h1 id="experience">Experience</h1>
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

        {/* projects */}
        <h1 id="projects">Projects</h1>
        <h2>City Learner</h2>
        <p>
          A React project that draws the map of a city with a configurable level of detail. <a href="https://quinnlas.github.io/city-learner/">Try it!</a>
        </p>
        <h2>This website!</h2>
        <p>
          This website is built with React. Check out the <a href="https://github.com/quinnlas/my-website">source code</a>.
        </p>
      </main>
    </div>
  );
}

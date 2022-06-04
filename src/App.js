import "./App.css";

function App() {
  const links = [
    {
      link: "Features",
      menuItems: ["Todo List", "Calendar", "Reminders", "Planning"],
    },
    {
      link: "Company",
      menuItems: ["History", "Our Team", "Blog"],
    },
    {
      link: "Careers",
      menuItems: [
        "How we change lives",
        "Veteran's program",
        "View open positions",
      ],
    },
    {
      link: "About",
      menuItems: ["Placeholder", "Placeholder", "Placeholder"],
    },
  ];

  return (
    <div className="app">
      <div id="nav">
        <div className="container-left">
          <span>snap</span>
          <ul id="links-list">
            {links.map((link) => (
              <li key={link.link}>
                <a href="#">{link.link}</a>
                <div className="dropdown">
                  {link.menuItems.map((menuItem) => (
                    <a href="#">{menuItem}</a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-right">
          <button className="nav-btn login">Login</button>
          <button className="nav-btn register">Register</button>
        </div>
      </div>
      <div id="main">
        <div id="main-left-container">
          <div id="content-container">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div id="main-right-container">
          <img src={require("./images/image-hero-desktop.png")}></img>
        </div>
      </div>
    </div>
  );
}

export default App;

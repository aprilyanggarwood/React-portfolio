import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Nav";

import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav/Navbar";
// import About from "./components/pages/About";
// import Portfolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";

// import "./App.css";
// function App() {
//   const [sidebar, setSidebar] = useState(false);
//   return (
//     <>
//       <Router>
//         <Nav sidebar={sidebar} setSidebar={setSidebar} />
//         <Switch>
//           <main className={sidebar ? "open" : ""}>
//             <Route path="/" exact component={About} />
//             <Route path="/portfolio" component={Portfolio} />
//             {/* <Route path="/contact" component={Contact} /> */}
//           </main>
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import HireReact from "./pages/HireReact";
import HireFullStack from "./pages/HireFullStack";
import AutomationEngineer from "./pages/AutomationEngineer";
import RemoteEngineer from "./pages/RemoteEngineer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hire-react-developer" element={<HireReact />} />
        <Route path="hire-full-stack-developer" element={<HireFullStack />} />
        <Route path="automation-engineer" element={<AutomationEngineer />} />
        <Route path="remote-software-engineer" element={<RemoteEngineer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

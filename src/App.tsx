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
import HireN8n from "./pages/HireN8n";
import ApiIntegrationServices from "./pages/ApiIntegrationServices";
import ReactNodeDeveloper from "./pages/ReactNodeDeveloper";
import AutomationCaseStudies from "./pages/AutomationCaseStudies";
import FaqPage from "./pages/FaqPage";
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
        <Route path="hire-n8n-developer" element={<HireN8n />} />
        <Route path="api-integration-services" element={<ApiIntegrationServices />} />
        <Route path="react-nodejs-developer" element={<ReactNodeDeveloper />} />
        <Route path="automation-case-studies" element={<AutomationCaseStudies />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="automation-engineer" element={<AutomationEngineer />} />
        <Route path="remote-software-engineer" element={<RemoteEngineer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

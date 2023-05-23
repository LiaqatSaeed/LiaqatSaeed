import {
  Menu,
  AboutSection,
  ProjectSection,
  FeatureSection,
  Footer
} from './components';
import { AppProvider } from './context';


import './App.css';

function App() {

  return (
    <AppProvider>
      <Menu />
      <AboutSection />
      <ProjectSection />
      <FeatureSection />
      <Footer />
    </AppProvider>
  );
}

export default App;

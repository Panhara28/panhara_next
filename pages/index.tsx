import { Layout } from '../components/Layout';
import About from '../sections/About';
import Skill from '../sections/Skill';
import Reference from '../sections/Reference';
import Service from '../sections/Service';
import Resume from '../sections/Resume';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const Index = () => (
  <Layout>
    <About />
    <Skill />
    <Reference />
    <Service />
    <Resume />
    <Blog />
    <Contact />
  </Layout>
);

export default Index;
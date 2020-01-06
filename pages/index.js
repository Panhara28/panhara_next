import { Layout } from '../components/Layout';
import Intro from '../sections/Intro';
import About from '../sections/About';
import Service from '../sections/Service';
import Resume from '../sections/Resume';
import Skill from '../sections/Skill';
import Blog from '../sections/Blog';
const Index = () => (
  <Layout>
    <Intro />
    <About />
    <Service />
    <Resume />
    <Skill />
    <Blog />
  </Layout>
);

export default Index;
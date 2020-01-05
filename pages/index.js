import { Layout } from '../components/Layout';
import Link from 'next/link';
import Intro from '../sections/Intro';
import About from '../sections/About';
const PostLink = props => (
  <li>
    <Link href={ `/post?title=${props.title}` }>
      <a>{ props.title }</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <Intro />
    <About />
  </Layout>
);

export default Index;
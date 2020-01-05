import { Layout } from '../components/Layout';
import Link from 'next/link';
import Intro from '../components/Intro'
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
  </Layout>
);

export default Index;
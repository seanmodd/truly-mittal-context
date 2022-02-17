import Head from 'next/head';
import Layout from '../components/Layout';
import MyCounter from '../components/MyCounter';

export default function Home() {
  return (
    <Layout>
      <MyCounter />
    </Layout>
  );
}

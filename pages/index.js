import Head from 'next/head';
import Layout from '../components/Layout';
import MyComponent from '../components/MyComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <MyComponent />
    </Layout>
  );
}

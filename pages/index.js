import Head from 'next/head';
import Layout from '../components/Layout';
import MyCounter from '../components/MyCounter';
import CounterContextProvider from '../contexts/CounterContext';

export default function Home() {
  return (
    <Layout>
      <CounterContextProvider>
        <MyCounter />
      </CounterContextProvider>
    </Layout>
  );
}

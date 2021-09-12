import Cta from '@/components/Cta';
import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <main>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <section className='bg-pink-50'>
                <div>
                    <Cta />
                </div>
            </section>
        </main>
    );
};

export default Home;

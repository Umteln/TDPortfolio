import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';

export default function Home() {
    return (
        <>
            <Navbar />
            <main
                id='home'
                className='flex flex-col justify-between items-cent p-[6rem] min-h-[100vh]'
            >
                <Header />
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

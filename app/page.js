import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';

export default function Home() {
    return (
        <div id='home'>
            <Navbar />
            <div className='flex flex-col justify-between items-cent p-[1rem] max-w-[100vw] max-h-[100vh]'>
                <main>
                    <Header />
                    <Services />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

import Banner from '@/components/Portfolio/Banner';
import Portfolio from '@/components/Portfolio/Portfolio';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export default function Home() {
    return (
        <div className="bg-backSecondary">
            <Navbar />
            <Banner />
            <Portfolio />
            <Footer />
        </div>
    );
}

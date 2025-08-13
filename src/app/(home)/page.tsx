import AboutCompany from '@/components/Home/AboutCompany';
import Agreement from '@/components/Home/Agreement';
import Banner from '@/components/Home/Banner';
import Choose from '@/components/Home/Choose';
import Do from '@/components/Home/Do';
import Experience from '@/components/Home/Experience';
import Feedback from '@/components/Home/Feedback';
import GetToKnow from '@/components/Home/GetToKnow';
import MainServices from '@/components/Home/MainServices';
import Help from '@/components/Home/Help';
import Newsletter from '@/components/Home/Newsletter';
import PortfolioHome from '@/components/Home/PortfolioHome';
import Proposal from '@/components/Home/Proposal';
import Services from '@/components/Home/Services';
import Solutions from '@/components/Home/Solutions';
import Started from '@/components/Home/Started';
import Stats from '@/components/Home/Stats';
import Technology from '@/components/Home/Technology';
import Work from '@/components/Home/Work';
import WorkingProcess from '@/components/Home/WorkingProcess';
import ContactForm from '../contact/contact-form';
import EmailForm from '../contact/EmailForm';

export default function Home() {
    return (
        <>
            <Banner />
            <AboutCompany />
            <MainServices />
            <Experience />

            <Choose />
            <Services />
            {/* <Work /> */}
            <WorkingProcess />
            <PortfolioHome />
            <Stats />
            <Technology />
            <Do />
            <Solutions />
            <Started />
            <GetToKnow />
            <Proposal />
            <Agreement />
            <Feedback />
            <EmailForm />
            {/* <ContactForm /> */}
            <Newsletter />
            <Help />
            {/* <Demo /> */}
        </>
    );
}

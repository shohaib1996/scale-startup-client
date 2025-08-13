import { message, Modal, Checkbox } from "antd";
import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getServices } from "../action/initialActions";
import AppDownloadContainer from "../components/AppDownloadContainer/AppDownloadContainer";
import CombinedSlide from "../components/global/CombinedSlide";
import FbReviewSlide from "../components/global/FbReviewSlide";
import FeaturesServiceSlide from "../components/global/FeaturesServicesSlide";
import Footer from "../components/global/Footer";
import GoogleReviewSlide from "../components/global/GoogleReviewSlide";
import SuccessSlide from "../components/global/SuccessSlide";
import Header from "../components/Header/Header";
import BestContent from "../components/Home/BestContent";
import CourseList from "../components/Home/CourseList";
import Facilities from "../components/Home/Facilities";
import HeroSection from "../components/Home/HeroSection";
// import Partners from '../components/Home/Partners'
import PlanCard from "../components/Home/PlanCard";
import TabSection from "../components/Home/TabSection";
import Testimonial from "../components/Home/Testimonial";
import Welcome from "../components/Home/Welcome";
import Scrollup from "../components/Scrollup/Scrollup";
import SideIcon from "../components/SideIcon";
import VirtualAssistance from "../components/VirtualAssistance/VirtualAssistance";

function Home() {
  const Router = useRouter();
  const [latestCourses, setLatestCourses] = useState([]);
  const [porgrammes, setProgrammes] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalCloseVisible, setIsModalCloseVisible] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [webinarClose, setWebinarClose] = useState(localStorage.getItem('webinarClose'));

  const dispatch = useDispatch();


  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        let res = await axios.get("/course/homedata");
        let { courses, programmes, interviews, services } = res.data;
        setLatestCourses(courses || []);
        setProgrammes(programmes || []);
        setInterviews(interviews || []);
        setServices(services || []);
        setIsLoading(false);


      } catch (e) {
        setIsLoading(false);
        console.error(e);
        e && e.response && message.error(e?.response?.data?.error);
      }
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsModalVisible(true);
    }, 1000);
    setTimeout(() => {
      // setIsModalVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setWebinarClose(localStorage.getItem('webinarClose'))

    setTimeout(() => {
      localStorage.removeItem('webinarClose')
      setWebinarClose(false)
    }, 1000 * 60 * 60 * 12)
  }, [webinarClose])

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleHide = (e) => {
    localStorage.setItem('webinarClose', e.target.checked);
    setWebinarClose(e.target.checked)
    setIsModalVisible(false);
  };


  // console.log(services, 'from index')

  return (
    <>
      {/* <Head>
        <link rel="icon" href="/placeholder.jpg" />
      </Head> */}
      {/* {/* <VirtualAssistance></VirtualAssistance> */}
      <SideIcon toggle={toggle} setToggle={setToggle} />
      <div onMouseOver={() => setToggle(false)}>
        <Header />

        <NextSeo
          title="TS4U - Best IT Training and 100% Job Placement in USA"
          description="We TS4U, help you to become a master in your dream field. Join our CloudOps, QA, Java, Python, Product Owner, and full stack courses with 100% job placement. Call Now!"
          canonical="https://ts4u.us/"
          openGraph={{
            url: "https://ts4u.us",
            title: "TS4U - Best IT Training and 100% Job Placement in USA",
            description: "We TS4U, help you to become a master in your dream field. Join our CloudOps, QA, Java, Python, Product Owner, and full stack courses with 100% job placement. Call Now!",
            images: [
              {
                url: "/placeholder.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
              },
            ],
            site_name: "TS4U",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
          linkedin={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <main id="home">
          {/* Modal Started For Pop Up*/}
          <Modal
            width={700}
            title={null}
            closable={false}
            bodyStyle={{ padding: "0" }}
            style={{
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              padding: 0,
              borderRadius: "30px"
            }}
            visible={isModalVisible && !webinarClose}
            footer={null}
          >
            <div className="home_pop_up">
              {modalCloseVisible && <div className="close_pop_up" onClick={handleCancel}>
                <AiOutlineClose className="close_icon" />
              </div>}

              <div className="modal_img">
                <a target='_blank' href="https://ts4u.us/link/aug-session">
                  <img src="/homeModal/index8.jpeg" alt="modal" />

                </a>
              </div>

              {
                modalCloseVisible && <div className="pop_up_checkbox_container text-center" style={{ marginLeft: '30px', paddingBottom: '10px', color: 'white' }}>
                  <Checkbox onChange={handleHide} className="pop_up_checkbox">I don't want to see this pop up for the next 12 hours.</Checkbox>
                </div>
              }

              {/* <div className="button_modal">
                <div className="button_main">
                  <div className="two_btn">
                    <button className="btn_modal"> <a className="call_us_url" target="_blank" href="tel:+(1) 586-276-7347">Call: +(1)586-276-7347</a></button>
                    <button className="btn_modal"> <a target="_blank" href="mailto:info@techserve4u.com">Email: info@ts4u.us</a></button>
                  </div>
                  <div className="button_wrapper">
                    <button className="btn_modal3">  <a target="_blank" href="https://ts4u.us/channel-invitation/61d836320ffc531d5767b6e4">
                      <img style={{ width: "30px" }} src={"/blink.gif"} alt="" />   Career Counseling <img style={{ width: "30px" }} src={"/blink.gif"} alt="" />
                    </a></button>
                  </div>
                </div>
                <div className="link_code">
                  <li><a target="_blank" href="https://play.google.com/store/apps/details?id=us.ts4u.ts4uapp"> <img style={{ width: "150px", marginTop: "-3px" }} src={'/playstore.gif'} alt="" /></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://apps.apple.com/us/app/ts4u-it-training-and-career/id1594666175">   <img style={{ width: "150px", marginTop: "-2.5px", marginLeft: "5px", marginRight: "10px" }} src={'/applestore.gif'} alt="" /></a>
                  </li>
                  <div className="barcode">
                    <div>
                      <img src="/climb/Join our Chat.gif" alt="chat" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

          </Modal>

          {/* Modal End For Pop Up */}

          {/* <section>
                    <HeroSlider />
                </section> */}
          <section>
            <HeroSection />
          </section>
          <section>
            <FeaturesServiceSlide />

          </section>

          {/*       <section>
                    <Partners />
                </section> */}


          {/* commenting for testing */}
          {/* <section>
          <Welcome />
        </section> */}
          <section>
            <PlanCard />
          </section>

          {/* <section>
                    <CourseList
                        to='course'
                        isLoading={isLoading}
                        courseData={porgrammes}
                        title='Our Programs'
                        description='If you are a recent graduate or job seeker, now is the moment to jumpstart your career, and we will assist you in securing your ideal job.TS4U.'
                    />
                </section> */}

          {interviews.length > 0 && (
            <>
              <section>
                <CourseList
                  to="interview"
                  isLoading={isLoading}
                  courseData={interviews}
                  title="Mock Interviews"
                //description="If you are a recent graduate or job seeker, now is the moment to jumpstart your career, and we will assist you in securing your ideal job.TS4U."
                />
              </section>

            </>
          )}

          {
            services.length > 0 && (
              <section>
                <CourseList
                  to="professional-service"
                  isLoading={isLoading}
                  courseData={services}
                  title="Professional Services"
                //description="If you are a recent graduate or job seeker, now is the moment to jumpstart your career, and we will assist you in securing your ideal job.TS4U."
                />
              </section>
            )
          }

          {
            latestCourses?.length > 0 &&
            <section>
              <CourseList
                to="course-curriculum"
                isLoading={isLoading}
                courseData={latestCourses}
                title="Latest Courses"
              //description="If you are a recent graduate or job seeker, now is the moment to jumpstart your career, and we will assist you in securing your ideal job."
              />
            </section>
          }


          {/* <section>
          <BestContent />
        </section> */}
          {/* <section>
                    <Consultation />
                </section> */}
          {/*   <section>
          <Facilities />
        </section> */}
          {/* 
        <FbReviewSlide />
        <GoogleReviewSlide />
        <SuccessSlide /> */}

          <CombinedSlide />

          {/*   <section>
          <Testimonial />
        </section> */}
          <section style={{ paddingTop: '10px', paddingBottom: '0' }}>
            <TabSection />
          </section>

          {/* <section style={{ marginTop: '30px' }}>
            <AppDownloadContainer />
          </section> */}
        </main>

        <Footer />
        <Scrollup></Scrollup>
        {/* <VirtualAssistance></VirtualAssistance> */}
      </div>
    </>
  );
}

// Home.getStaticProps=(context)=>{
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default Home;

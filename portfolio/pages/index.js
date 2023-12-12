import Layout from "../layout/Layout";
import HeaderFull from "../components/header/HeaderFull";
import Button from "../components/button/Button";
import TitleSection from "../components/heading/TitleSection";
import DsnGrid from "../layout/DsnGrid";
import Skills, {SkillProgressBar} from "../components/skill/Skills";
import BrandClientSwiper from "../components/brand-client/BrandClientSwiper";
import Facts from "../components/facts/Facts";
import ParallaxImage from "../components/Image/ParallaxImage";
import ServiceOne from "../components/services/grid/ServiceOne";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonial from "../components/testimonial/Testimonial";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import BlogSwiper from "../components/bolg/BlogSwiper";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import React from "react";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import {useSelector} from "react-redux";
import {dsnCN, scrollTop} from "../hooks/helper";


const headerContent = {
    title: `I'm Annekin Meyburgh.`,
    subtitle: `<span class="background-section pl-15 pr-15 pt-5 pb-5 d-inline-block">Welcome</span>`,
    src: "/img/about-intro.jpg"
};

function Index() {

    TitleSection.defaultProps = {
        className: "align-items-center text-center",
        classTitle: "text-uppercase"
    }
    const scrollbar = useSelector((state) => state.scrollbar);


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>

            <Head>
                <title>Portfolio | Annekin Meyburgh</title>
            </Head>

            <HeaderFull className="container" heroContent={headerContent} skin={"half-personal"} overlay={4}>

                <p className="pt-30 border-top">I'm a freelance software engineer, a life-long learner and nature lover.</p>


                <Button 
                    href="#" 
                    className="mt-30 line-head" 
                    borderStyle={"border-color-theme-color"}
                    borderRadius
                    onClick={(e)=>{
                        e.preventDefault();
                        const el = document.body.getElementsByClassName("about-me")[0]
                        console.log(el)
                        scrollTop({element: el, scrollbar, duration: -80});
                    }}
                    >
                    About Me
                </Button>
            </HeaderFull>
            {/*<!-- ========== About Section ========== */}
            <section className="about-me container p-relative section-margin" data-dsn-title="About Me">
                <TitleSection description={"{ HELLO }"}>
                    About Me
                </TitleSection>
                <DsnGrid col={2} colTablet={1} rowGapTablet={50}>
                    <div className="box-info">
                        <h4 className="title-block mb-20">A Little Bit about Myself</h4>
                        <p className="mb-15 border-top pt-20">I like programming and solving problems. In highschool I
                        use to compete in competive programming competions. That is where I fell in love with solving
                        complex computation problems. I was also pretty good at it, winning a bronze medal at our national competition.</p>
                        <p className="mb-30 border-bottom pb-20">I like going on long hikes, it helps set perspective and
                        coming up with creative solutions to tuff problems. I like solving soduko puzzels, it relaxes my mind and is nice
                        destraction when I'm overwhelmed</p>
                        <Button href={"/pdf/Resume.pdf"} target="_blank">
                            Download CV
                        </Button>

                    </div>
                    <div className="box-skills">
                        <Skills>
                            <SkillProgressBar bgColor={"pattern"} number={95}>Python</SkillProgressBar>
                            <SkillProgressBar bgColor={"pattern"} number={92}>Java</SkillProgressBar>
                            <SkillProgressBar bgColor={"pattern"} number={90}>C++</SkillProgressBar>
                            <SkillProgressBar bgColor={"pattern"} number={85}>Javascript</SkillProgressBar>
                            <SkillProgressBar bgColor={"pattern"} number={81}>Rust</SkillProgressBar>
                            <SkillProgressBar bgColor={"pattern"} number={78}>GoLang</SkillProgressBar>
                        </Skills>
                    </div>
                </DsnGrid>

                <BrandClientSwiper className="mt-50" grabCursor/>

            </section>
            {/*<!-- ========== End About Section ========== */}

            {/*<!-- ========== facts-section ==========*/}
            <div className="section-padding p-relative v-dark-head">
                <ParallaxImage alt={""} src={"/img/header.jpg"} overlay={7} asBackground/>
                <div className="container">
                    <Facts className="text-center" col={4} colTablet={2}/>
                </div>
            </div>
            {/*<!-- ========== end facts-section ========== */}


            {/*Start Service*/}
            <div className="container section-margin" data-dsn-title="My Services">
                <TitleSection className="align-items-center text-center" description={"{ My Services }"}>
                    I'm delivering high-performing <br/> technical solutions for
                    you.
                </TitleSection>
                <ServiceOne/>
            </div>
            {/*End Service*/}


            {/*========== Work Section ========== */}
            {/* <div className="container section-margin" data-dsn-title="My Work">
                <TitleSection description={"{ Our Works }"}>
                    AWESOME DESIGNS
                </TitleSection>
                <Portfolio
                    stylePortfolio={"work-classic"}
                    useFilter
                    filterClass="text-center"
                    styleBox={"line"}
                    col={3} colTablet={2} colMobile={1} rowGapMobile={50}
                    colGap={50} rowGap={80}
                />
            </div> */}
            {/*========== End Work Section ==========*/}

            {/*Start testimonial Section*/}
            {/* <div className="container section-margin" data-dsn-title="Testimonials">
                <TitleSection description={"{ testimonials }"}>
                    What People are <br/>Saying
                </TitleSection>
                <Testimonial className="text-center"
                             skin={["testimonials-personal", "box-line", 'box-half']}
                             backgroundColor={"background-section"}
                             centeredSlides
                             desktop={{slidesPerView: 3}}
                             tablet={{slidesPerView: 1}}
                             mobile={{slidesPerView: 1}}
                             speed={1000} grabCursor loop loopedSlides={2}
                             parallax parallaxImage={{"data-swiper-parallax-scale": 0.7}}
                             parallaxContent={{"data-swiper-parallax-opacity": 0, "data-swiper-parallax": "30%"}}
                >
                    <SwiperPagination className={`justify-content-between dsn-container mt-30`}/>
                </Testimonial>
            </div> */}
            {/*End testimonial Section*/}

            {/*Start Blog*/}
            {/* <div className="section-margin" data-dsn-title="My Blog">
                <TitleSection className={`container  align-items-center text-center`}
                              description={"{ Lasts post }"}>
                    Latest And Greatest <br/>Post
                </TitleSection>
                <BlogSwiper grabCursor
                            desktop={{spaceBetween: 50, slidesPerView: 1.5}}
                            tablet={{spaceBetween: 30, slidesPerView: 1.25}}
                            mobile={{spaceBetween: 0, slidesPerView: 1}}
                            centeredSlides loop
                            blur
                            parallax
                            speed={1200}
                            watchSlidesProgress
                            loopedSlides={2}
                            parallaxImage={{"data-swiper-parallax-scale": "0.85"}}

                >
                    <SwiperPagination className={`justify-content-between dsn-container mt-30`}/>
                </BlogSwiper>
            </div> */}
            {/*End Blog*/}

            {/*========== Next Page ==========*/}
            <NextPage className="section-padding border-top background-section"/>
            {/*========== End Next Page ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}

        </Layout>
    );
}


export default Index;
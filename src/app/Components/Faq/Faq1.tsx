"use client"
import React, { useEffect, useRef, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Image from 'next/image';

const Faq1 = () => {

    const faqContent = [
        {title:'What digital marketing services does The Crystal Engage offer ?', content:'The Crystal Engage provides end-to-end digital marketing and technology solutions, including Search Engine Optimization (SEO), Performance Marketing, Social Media Marketing, Website Design & Development, Branding, Content Marketing, Mobile App Development, E-commerce Development, UI/UX Design, and Custom Software Development. Our services are designed to help businesses increase online visibility, generate qualified leads, and achieve sustainable growth.'},
        {title:'How can digital marketing help my business grow ?', content:'Digital marketing helps businesses attract the right audience, improve brand visibility, generate quality leads, and increase conversions through targeted online strategies. By combining SEO, paid advertising, content marketing, and social media, businesses can strengthen their online presence and achieve measurable business growth.'},
        {title:'How long does SEO take to deliver results ?', content:'SEO is a long-term strategy that builds sustainable online visibility. While some improvements may be noticeable within 2–3 months, significant growth in organic traffic, keyword rankings, and lead generation generally takes 4–6 months or more, depending on your industry, competition, and website performance.'},
        {title:'Do you create customized digital marketing strategies ?', content:'Yes. Every business has unique goals and challenges, so we develop customized digital marketing strategies based on your industry, target audience, competition, and business objectives. This ensures every campaign is aligned with measurable outcomes such as increased traffic, qualified leads, and higher conversions.'},
        {title:'Why choose The Crystal Engage as your digital growth partner ?', content:'We focus on delivering measurable business outcomes rather than simply offering marketing services. By combining data-driven strategies, industry expertise, transparent communication, and continuous optimization, we help businesses improve online visibility, attract the right customers, and achieve long-term digital growth.'},
      ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

          useEffect(() => {
              loadBackgroudImages();
          }, []);
      
    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
  
    const handelClick = () => {
      setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
      setToggle(!toggle);
    };
    const handelClose = () => {
      setIframeSrc('about:blank');
      setToggle(!toggle);
    };   

    return (
        <section className="position-relative overflow-hidden">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_30 position-relative z-1">
            <div className="col-lg-5">
              <div className="cs_faq_header">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                    FAQ<span className="cs_shape_right"></span>
                  </p>
                  <h2 className="cs_fs_48 mb-0 wow fadeInUp">Frequently Asked Questions</h2>
                </div>
                <div className="cs_height_51 cs_height_lg_50"></div>
                <div className="cs_video_block cs_style_2 cs_center cs_bg_filed cs_radius_20 position-relative wow fadeInDown" data-background="/assets/img/video_bg_3.jpg">
                  <a onClick={handelClick} aria-label="Play video button" className="cs_player_btn cs_video_open cs_center cs_radius_50">
                  <span className="cs_player_btn_icon cs_center cs_blue_color"><span></span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_accordians">

              {faqContent.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 ${index === openItemIndex ? "active" : "" }`} >
                  <div onClick={() => handleItemClick(index)} className="cs_accordian_head position-relative">
                    <h2 className="cs_accordian_title cs_fs_20 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggler cs_heading_color position-absolute"><i className="bi bi-chevron-double-right"></i></span>
                  </div>
                  <div ref={accordionContentRef} className="cs_accordian_body">
                    <p>{item.content}</p>
                  </div>
                </div>
                ))}

              </div>
            </div>
          </div>
          <div className="cs_faq_shape_1 position-absolute">
            <Image src="/assets/img/faq_shape_1.svg" alt="img" width={381} height={1044}   />
          </div>
          <div className="cs_faq_shape_2 position-absolute">
            <Image src="/assets/img/faq_shape_2.svg" alt="img" width={71} height={48}   />
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>

        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>

      </section>
    );
};

export default Faq1;
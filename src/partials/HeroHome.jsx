import React, { useState } from 'react';
import Modal from '@/utils/Modal';

import HeroImage from '@/images/hero-image.png';

function HeroHome() {

    const [videoModalOpen, setVideoModalOpen] = useState(false);

    return (
        <section className="relative">

            {/* Illustration behind hero content */}
            <div className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2"
                aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl px-4 mx-auto sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h1 className="mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter"
                            data-aos="zoom-y-out">等你共赴一场<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">成航之约</span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="mb-8 text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">今天起，
                                全国各地高考成绩陆续公布，而小航也怀着满满的期待，期待着你们的到来。这里，是你们铸就未来的天地
                                ，迈开新的...</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                data-aos="zoom-y-out" data-aos-delay="300">
                                {/* <div>
                                    <a className="w-full mb-4 text-white bg-blue-600 btn hover:bg-blue-700 sm:w-auto sm:mb-0"
                                       href="#0">Start free trial</a>
                                </div> */}
                                <div>
                                    <a className="w-full text-white bg-gray-900 btn hover:bg-gray-800 sm:w-auto sm:ml-4"
                                        target="_black" href="https://mp.weixin.qq.com/s/zBKwz39MOiItPH7IXSJFgw">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div>
                        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                            <div className="flex flex-col justify-center">
                                <img className="mx-auto" src={HeroImage} width="768" height="432" alt="Hero" />
                                {/*<svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-a/uto" width="768"*/}
                                {/*     height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg"*/}
                                {/*     xmlnsXlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <defs>*/}
                                {/*        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">*/}
                                {/*            <stop stopColor="#FFF" offset="0%"/>*/}
                                {/*            <stop stopColor="#EAEAEA" offset="77.402%"/>*/}
                                {/*            <stop stopColor="#DFDFDF" offset="100%"/>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">*/}
                                {/*            <stop stopColor="#FFF" offset="0%"/>*/}
                                {/*            <stop stopColor="#EAEAEA" offset="48.57%"/>*/}
                                {/*            <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%"/>*/}
                                {/*        </linearGradient>*/}
                                {/*        <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%"*/}
                                {/*                        id="hero-ill-e">*/}
                                {/*            <stop stopColor="#4FD1C5" offset="0%"/>*/}
                                {/*            <stop stopColor="#81E6D9" offset="25.871%"/>*/}
                                {/*            <stop stopColor="#338CF5" offset="100%"/>*/}
                                {/*        </radialGradient>*/}
                                {/*        <circle id="hero-ill-d" cx="384" cy="216" r="64"/>*/}
                                {/*    </defs>*/}
                                {/*    <g fill="none" fillRule="evenodd">*/}
                                {/*        <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128"/>*/}
                                {/*        <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96"/>*/}
                                {/*        <g fillRule="nonzero">*/}
                                {/*            <use fill="#000" xlinkHref="#hero-ill-d"/>*/}
                                {/*            <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d"/>*/}
                                {/*        </g>*/}
                                {/*    </g>*/}
                                {/*</svg>*/}
                            </div>
                            <button
                                className="absolute flex items-center p-4 font-medium transform -translate-y-1/2 bg-white rounded-full shadow-lg top-full group"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setVideoModalOpen(true);
                                }} aria-controls="modal">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-400 fill-current group-hover:text-blue-600"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                                    <path d="M10 17l6-5-6-5z" />
                                </svg>
                                <span className="ml-3">观看完整视频 (2 min)</span>
                            </button>
                        </div>

                        {/* Modal */}
                        <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen}
                            handleClose={() => setVideoModalOpen(false)}>
                            <div className="relative pb-9/16">
                                {/*<iframe className="absolute w-full h-full"*/}
                                {/*        src="https://www.bilibili.com/video/BV1B34y1h7Sg?share_source=copy_web&vd_source=0a1255e96e4626b503645f3bfc8b5618" title="Video"*/}
                                {/*        allowFullScreen></iframe>*/}
                                <iframe
                                    className="absolute w-full h-full"
                                    src="//player.bilibili.com/player.html?aid=598523329&bvid=BV1LB4y1Y7cn&cid=778634153&page=1"
                                    scrolling="no" border="0" frameBorder="no" framespacing="0"
                                    allowFullScreen={true}></iframe>
                            </div>
                        </Modal>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroHome;
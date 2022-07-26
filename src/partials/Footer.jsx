import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/favicon.png'

function Footer() {

  const handleSeedEm = () => {
    // window.location.href = "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=xayorKutsoW0tOumqqg";
    window.open("http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=xayorKutsoW0tOumqqg", "_blank");        
  }

  return (
    <footer>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid gap-8 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
                </svg> */}
                <img
                  className="w-auto h-8 sm:h-10"
                  src={logo}
                  alt="成航招生办公室"
                />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link to="#" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline">成航</Link> · <Link to="#" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline">招生办公室</Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">录取专业查询</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口1</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口2</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口3</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口4</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口5</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">录取专业查询</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口1</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口2</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口3</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口4</Link>
              </li>
              <li className="mb-2">
                <Link to="/matriculate" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口5</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">通知书单号查询</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/advice" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口1</Link>
              </li>
              <li className="mb-2">
                <Link to="/advice" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口2</Link>
              </li>
              <li className="mb-2">
                <Link to="/advice" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口3</Link>
              </li>
              <li className="mb-2">
                <Link to="/advice" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口4</Link>
              </li>
              <li className="mb-2">
                <Link to="/advice" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">查询入口5</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-800">需要帮助？</h6>
            <p className="mb-4 text-sm text-gray-600">请给开发者发一封友好说明您问题的邮件</p>
            <form onSubmit={handleSeedEm}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">My Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="w-full px-3 py-2 pr-12 text-sm text-gray-800 form-input" readOnly value="iminhw@qq.com" required />
                    <button type='button' onClick={handleSeedEm} className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px my-2 -ml-px bg-gray-300" aria-hidden="true"></span>
                      <svg className="flex-shrink-0 w-3 h-3 mx-3 text-blue-600 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom area */}
        <div className="py-4 border-t border-gray-200 md:flex md:items-center md:justify-between md:py-8">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="http://wpa.qq.com/msgrd?v=3&uin=50513180&site=qq&menu=yes" alt="50513180"  target="_blank" className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100" aria-label="Twitter">
                <svg t="1658306720857" className="w-8 h-8 fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2529" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="2530"></path></svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/iminhw" target="_blank" className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100" aria-label="Github">
                <svg t="1658307001760" className="w-8 h-8 fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3431" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="3432"></path></svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://gitee.com/minhw" target="_blank" className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100" aria-label="Facebook">
                <svg t="1658307082106" className="w-8 h-8 fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3599" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="3600"></path></svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 text-sm text-gray-600">Copyright © 2022 iminhw All Rights Reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

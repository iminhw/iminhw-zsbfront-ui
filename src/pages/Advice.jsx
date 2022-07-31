import React from 'react';
import { Link } from 'react-router-dom';

import Headers from '@/partials/Headers';
import Footer from '@/partials/Footer';
import Swal from 'sweetalert2';

import { getMatKddh, validTest } from '@/api/getmat'
// import { encrypt, decrypt } from "@/utils/jsencrypt";


function Advice() {

  const handleSubmit = () => {
    const ksh = document.getElementById("ksh").value;
    if (!ksh || ksh.trim() == "") {
      // console.log("考生号异常");
      Swal.fire({
        icon: "error",
        title: "考生号不能为空",
        toast: true,
        position: 'top',
        timer: 3000,
        showConfirmButton: false,
      });
      return false;
    }
    getMatKddh(ksh).then((response) => {
      console.log(response)
      if (response.data) {
        const data = response.data;
        Swal.fire({
          icon: "success",
          title: data.xm + "，您的通知书快递单号 " + data.kddh,
          footer: `<a href="https://www.kuaidi100.com/chaxun?com=ems&nu=${data.kddh}" target="_blank">点击查询物流信息</a>`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "查不到您的任何信息",
        });
      }
    });
  }
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Headers />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20 " data-aos="zoom-y-out" data-aos-delay="50">
                <h2 className="h2">输入您的考生号或高考报名号，可以查询您通知书快递单号</h2>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form method='post' onSubmit={() => false}>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3" data-aos="zoom-y-out" data-aos-delay="150">
                      <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="ksh">考生号</label>
                      <input id="ksh" type="text" className="w-full text-gray-800 form-input" placeholder="请输入您的考生号" required />
                    </div>
                  </div>

                  <div className="flex flex-wrap mt-6 -mx-3" data-aos="zoom-y-out" data-aos-delay="250">
                    <div className="w-full px-3">
                      <button type='button' onClick={handleSubmit} className="w-full text-white bg-blue-600 btn hover:bg-blue-700">查 询</button>
                    </div>
                  </div>
                </form>

                <div className="mt-6 text-left text-gray-500" data-aos="zoom-y-out" data-aos-delay="450">
                  <ol className="leading-relaxed list-decimal font-extralight">
                    <li>
                      因为一些原因导致手机号查不到通知书？<p>我们提供这个功能给您查询你的通知书快递单号。</p>
                    </li>
                    <li>
                      找不到用查询的通知书的方法？<p>通过此页面得到自己通知书的快递单号，像查普通快递一样。</p>
                    </li>
                    <li>
                      点击直接查看物流信息报错？<p>点击直接访问<a className='text-red-300' href='https://www.ems.com.cn/queryList' target="_black">ems查询页面</a> 输入得到的快递单号进行查询。</p>
                    </li>
                  </ol>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Advice;
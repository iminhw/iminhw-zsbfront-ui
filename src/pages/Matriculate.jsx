import React from 'react';
import { Link } from 'react-router-dom';

import Headers from '@/partials/Headers';
import Footer from '@/partials/Footer';
import Swal from 'sweetalert2'

import { getMatriculate } from '@/api/getmat'
// import { encrypt, decrypt } from "@/utils/jsencrypt";


function Matriculate() {

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
    getMatriculate(ksh).then((response) => {
      if (response.data) {
        const data = response.data;
        Swal.fire({
          icon: "success",
          title: data.xm + "，您被我校 " + data.zy + " 录取",
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
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20" data-aos="zoom-y-out" data-aos-delay="50">
                <h1 className="h2">输入您的考生号或高考报名号，可以查询您是否被我校录取</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form method='post' onSubmit={() => false}>
                  <div className="flex flex-wrap mb-4 -mx-3" data-aos="zoom-y-out" data-aos-delay="150">
                    <div className="w-full px-3" data-aos="zoom-y-out" data-aos-delay="150">
                      <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="ksh">考生号</label>
                      <input id="ksh" type="text" className="w-full text-gray-800 form-input" placeholder="请输入您的考生号" required />
                    </div>
                  </div>

                  <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3" data-aos="zoom-y-out" data-aos-delay="250">
                      <button type='button' onClick={handleSubmit} className="w-full text-white bg-blue-600 btn hover:bg-blue-700">查 询</button>
                    </div>
                  </div>
                </form>


              </div>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer styles='data-aos="zoom-y-out" data-aos-delay="350"' />
    </div>
  );
}

export default Matriculate;
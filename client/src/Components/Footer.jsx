import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <section class="flex flex-col h-screen lg:justify-end font-poppins bg-[#DBC9B1]">
        <div class="relative py-10 bg-center bg-no-repeat bg-cover">
          <div class="absolute top-0 left-0 w-full h-full bg-[#F9EFE6] bg-opacity-60 "></div>
          <div class="relative z-10 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 ">
            <div class="flex flex-wrap pb-10 -mx-3">
              <div class="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
                <a
                  href="#"
                  class="inline-block pb-2 text-left font-bold text-[#17403C]"
                >
                  About Company
                </a>
                <div class="w-16 mb-4 border-b-2 border-[#17403C] "></div>
                <p class="text-base font-normal leading-6 text-[#17403C] lg:w-64">
                  At Glaze-and-Grace, we bring artisanal beauty to your everyday
                  life with our exquisite ceramic creations.
                </p>
              </div>
              <div class="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                <h2 class="pb-2 text-lg font-bold text-[#17403C] ">
                  Quick Links
                </h2>
                <div class="w-16 mb-4 border-b-2 border-[#17403C] "></div>
                <ul>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white "
                    >
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white"
                    >
                      Category
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white"
                    >
                      View Profile
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white "
                    >
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full px-4 mb-11 lg:mb-0 md:w-1/4 lg:w-2/12">
                <h2 class="pb-2 text-lg font-bold text-[#17403C]">Features </h2>
                <div class="w-16 mb-4 border-b-2 border-[#17403C] "></div>
                <ul>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <Link to="/FAQ"><a
                      href="#"
                      class="inline-block text-base font-normal text-[#17403C] transition duration-150 ease-in-out hover:text-white"
                    >
                      FAQ
                    </a></Link>
                  </li>
                </ul>
              </div>
              <div class="w-full px-4 mb-11 lg:mb-0 md:w-1/3 lg:w-3/12">
                <h2 class="pb-2 text-lg font-bold text-[#17403C] ">
                  Our Socials
                </h2>
                <div class="w-16 mb-4 border-b-2 border-[#17403C] "></div>
                <div class="flex flex-col justify-start mt-4 ">
                <a
                    href="#"
                    type="button"
                    class="flex items-center m-1 leading-normal text-[#17403C] border-2 border-[#17403C] rounded-full hover:bg-white transition duration-150 ease-in-out w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      fill="currentColor"
                      class="w-4 h-4 mx-2 text-[#17403C] bi bi-linkedin"
                      viewBox="0 0 2 2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="ml-3 text-base ">Mothana </span>{" "}
                    <span className="ml-1 text-base"> Majali</span>
                  </a>

                  <a
                    href="#"
                    type="button"
                    class="flex items-center m-1 leading-normal text-[#17403C] border-2 border-[#17403C] rounded-full hover:bg-white transition duration-150 ease-in-out w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      fill="currentColor"
                      class="w-4 h-4 mx-2 text-[#17403C] bi bi-linkedin"
                      viewBox="0 0 2 2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="ml-3 text-base ">Sajida</span>{" "}
                    <span className="ml-1 text-base"> Ajawin </span>
                  </a>

                  
                  <a
                    href="#"
                    type="button"
                    class="flex items-center m-1 leading-normal text-[#17403C] border-2 border-[#17403C] rounded-full hover:bg-white transition duration-150 ease-in-out w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      fill="currentColor"
                      class="w-4 h-4 mx-2 text-[#17403C] bi bi-linkedin"
                      viewBox="0 0 2 2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="ml-3 text-base ">Bayan </span>{" "}
                    <span className="ml-1 text-base"> Alkhader</span>
                  </a>


                  <a
                    href="#"
                    type="button"
                    class="flex items-center m-1 leading-normal text-[#17403C] border-2 border-[#17403C] rounded-full hover:bg-white transition duration-150 ease-in-out w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      fill="currentColor"
                      class="w-4 h-4 mx-2 text-[#17403C] bi bi-linkedin"
                      viewBox="0 0 2 2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="ml-3 text-base ">Melad </span>{" "}
                    <span className="ml-1 text-base"> Abulail</span>
                  </a>
                  
                  <a
                    href="#"
                    type="button"
                    class="flex items-center m-1 leading-normal text-[#17403C] border-2 border-[#17403C] rounded-full hover:bg-white transition duration-150 ease-in-out w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      fill="currentColor"
                      class="w-4 h-4 mx-2 text-[#17403C] bi bi-linkedin"
                      viewBox="0 0 2 2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="ml-3 text-base ">Sanad </span>{" "}
                    <span className="ml-1 text-base"> Hantash</span>
                  </a>
                  
                  <a
                    href="#"
                    type="button"
                    class="flex items-center m-1 leading-normal text-[#17403C] border-2 border-[#17403C] rounded-full hover:bg-white transition duration-150 ease-in-out w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      fill="currentColor"
                      class="w-4 h-4 mx-2 text-[#17403C] bi bi-linkedin"
                      viewBox="0 0 2 2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="ml-3 text-base ">Lo'i </span>{" "}
                    <span className="ml-1 text-base"> Dahamsheh</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="pt-4 text-center text-[]">
              <span>
                © Copyright 2022. All Rights Reserved to{" "}
                <span className="transition duration-150 ease-in-out hover:text-white">
                  Glaze-and-Grace.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
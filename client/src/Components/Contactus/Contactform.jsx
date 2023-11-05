import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';

function Contactform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData);
      console.log('Form data sent successfully:', response.data);

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative bg-[#DBC9B1]">
        <div className="container gap-0 px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap bg-[#F9EFE6]">
          <div className="relative flex items-end justify-start p-10 mx-20 overflow-hidden bg-gray-300 rounded-lg lg:w-1/2 md:w-1/2 sm:mr-2">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.3468111660588!2d36.08464106415648!3d32.058773362353215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b65cd4d8f17e1%3A0x30e86b8a97e4ac7d!2sOrange%20Digital%20Village%20Zarqa!5e0!3m2!1sen!2sjo!4v1699115906355!5m2!1sen!2sjo"
            ></iframe>
            <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
                <p className="mt-1">Zarqa, Jordan, Orange Coding Academy Zarqa  Building Number 80</p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
                <a className="leading-relaxed text-red-500">Melad.k.abulail@gmail.com</a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
                <p className="leading-relaxed">+(962)776877452</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full p-5 mx-20 mt-8 bg-white lg:w-2/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Contact us</h2>
            <p className="mb-5 leading-relaxed text-gray-600">Tell us if you have a suggestion or complaint!</p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="relative mb-4">
                <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  placeholder="Tell us what you think"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                className="text-white bg-[#17403C] border-0 py-2 px-6 focus:outline-none hover-bg-[#C3CAC3] rounded text-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>


<div>

<link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"></link>


<div class="flex items-center justify-center min-h-screen bg-[#F9EFE6Z] py-48">
    <div class="flex flex-col">

        

        <div class="flex flex-col mt-8">
      
            <div class="container max-w-7xl px-4">
             
                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
                     
                        <h1 class="text-gray-900 text-4xl font-bold mb-8">
                            Meet the Team
                        </h1>

                       
                        <p class="text-gray-700 text-lg font-light">
                          The Team Behind this great work
                        </p>
                    </div>
                </div>


                

                
                <div class="flex flex-wrap items-center justify-center	">
                 

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
               
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"></img>
                            </a>

           
                            <div class="text-center mt-6">
            
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                   Mothana Majali
                                </h1>

                        
                                <div class="text-gray-700 font-light mb-2">
                                    Scrum Master
                                </div>

              
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                       
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                        
                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

         
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                 
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
                           
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"></img>
                            </a>

              
                            <div class="text-center mt-6">
             
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                Sajida Ajawin
                                </h1>

                   
                                <div class="text-gray-700 font-light mb-2">
                                    Product Owner
                                </div>

                   
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                       
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

             
                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

      
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
         
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"></img>
                            </a>

                    
                            <div class="text-center mt-6">
                      
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                Bayan Alkhader
                                </h1>

                
                                <div class="text-gray-700 font-light mb-2">
                                    QA
                                </div>

              
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                       
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                   
                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

               
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    

                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
                        
                        <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"></img>
                            </a>

                          
                            <div class="text-center mt-6">
                      
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                    Melad Abulail
                                </h1>

                              
                                <div class="text-gray-700 font-light mb-2">
                                    Developer
                                </div>

                           
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                              
                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                   
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
         
                        <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"></img>
                            </a>

                    
                            <div class="text-center mt-6">
                      
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                Sanad
Hantash
                                </h1>

                
                                <div class="text-gray-700 font-light mb-2">
                                    Developer
                                </div>

              
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                       
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                   
                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

               
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
         
                        <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"></img>
                            </a>

                    
                            <div class="text-center mt-6">
                      
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                Lo'i
Dahamsheh
                                </h1>

                
                                <div class="text-gray-700 font-light mb-2">
                                    Developer
                                </div>

              
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                       
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                   
                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

               
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>









</div>




      

      <Footer/>
    </div>
  );
}

export default Contactform;
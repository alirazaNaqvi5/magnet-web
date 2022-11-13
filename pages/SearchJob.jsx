import React from 'react'
import Footer from './Component/Footer';
const SearchJob = () => {
  return (
    <div className='w-full'>
          <div className="md:bg-fixed md:w-full "   style={{ backgroundImage: 'url(image/gif-2.gif)',backgroundRepeat:"no-repeat",backgroundSize:"cover" } }>
            <img className="bg-transparent  w-full" src='/image/page2wave.png' alt="/"  />
            <h1 className="text-white text-6xl text-center font-bold">Search Job</h1>
          <img className="bg-transparent m-0 p-0 w-full" src='/image/page2wavedown.png' alt="/" />
        </div>
        <div>
            <img className="bg-transparent absolute" src='/image/candidatewavedown.svg'alt="" />
        </div>
        <div className="h-52 bg-[#E5E5E5]"></div>
            <div className="lg:flex sm:grid md:grid lg:flex-row bg-[#E5E5E5] sm:overflow-hidden sm:mx-auto md:mx-auto">
                <div className="basis-1/2">
                    <h1 className="text-5xl text-black text-center font-bold py-10">Sectors</h1>
                    <div className="items-center py-4 lg:w-[300px]  sm:w-full md:w-full lg:m-auto md:my-4 bg-white">
                         <img className="m-auto" src='/image/branch.png' alt="/" />
                        <h1 className="text-xl text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                    </div>
                    <div className="items-center py-4 lg:w-[300px] sm:my-8 sm:w-full md:w-full lg:m-auto px-10 bg-white">
                        <img className="m-auto " src='/image/users.png' alt="" />
                        <h1 className="text-xl text-center  text-slate-600 font-bold py-4">Engineering</h1>
                    </div>
                    <div className="items-center py-4 lg:w-[300px] sm:w-full sm:my-8 md:w-full lg:m-auto px-10 bg-white">
                            <img className="m-auto " src='/image/usercheck.png' alt="" />
                            <h1 className="text-xl text-center  text-slate-600 font-bold py-4">Technical</h1>
                        </div>
                        <div className="items-center py-4 lg:w-[300px] sm:my-8 sm:w-full md:w-full lg:m-auto px-10 bg-white">
                            <img className="m-auto" src='/image/sitemap.png' alt="/" />
                            <h1 className="text-xl text-center  text-slate-600 font-bold py-4">NDP & Process</h1>
                        </div>
                        <div className="items-center py-4 lg:w-[300px] sm:my-8 sm:w-full md:w-full lg:m-auto px-10 bg-white">
                            <img className="m-auto" src='image/handholdingheart.png' alt="" />
                            <h1 className="text-xl text-center  text-slate-600 font-bold py-4">Health & Safety</h1>
                        </div>
                </div>
                <div className="w-full  py-32 ">
                    <div className="sm:grid lg:flex sm:mx-6 md:mx-6">
                        <input type="text" className="lg:w-80 lg:h-10 p-6 mx-4 sm:my-4 sm:w-full"  placeholder="Enter Your Job title"/>
                        <input type="option" className="lg:w-80 lg:h-10 p-6 mx-4 sm:my-4 sm:w-full" placeholder="Job type"/>
                        <button className="px-10 py-2 my-3 rounded-sm   hover:bg-slate-800 font-bold hover:text-white text-white  bg-black ">Search Now</button>
                    </div>  
                    <div className="lg:flex lg:flex-row lg:gap-10 pt-10 sm:grid">
                        <a className="hover:text-white text-slate-700" href="">
                            <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                <p className=" p-4  clear-right font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5">
                                <img src='/image/bookmark.png' className="w-[30px] h-[30px] float-left" alt="" />
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic  ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a className="hover:text-white text-slate-700" href="">
                                <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                    <p className=" p-4  clear-right font-semibold">Technical Manager-West Yorkshire-Food Manufacturing - c£50k - £60k </p>
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                    <div className="flex flex-row gap-4 py-5">
                                        <p className="text-red-700 italic tracking-wide " >Permanent</p>
                                        <p className="text-red-700 italic ">Lanacshire</p>
                                        <p className="text-red-700 italic ">Salary Offer</p>
                                        <p className=" italic  ">:60k + Benifits</p>
                                    </div>
                                    <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-10 pt-10 sm:grid">
                        <a className="hover:text-white text-slate-700" href="">
                            <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                <p className=" p-4  clear-right font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5">
                                <img src='/image/bookmark.png' className="w-[30px] h-[30px] float-left" alt="" />
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic  ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a className="hover:text-white text-slate-700" href="">
                                <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                    <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                    <p className=" p-4  clear-right font-semibold">Maintenance Engineering (Elec Bias) - North West-$44k+ Benifits </p>
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                    <div className="flex flex-row gap-4 py-5">
                                        <p className="text-red-700 italic tracking-wide " >Permanent</p>
                                        <p className="text-red-700 italic ">Lanacshire</p>
                                        <p className="text-red-700 italic ">Salary Offer</p>
                                        <p className=" italic  ">:60k + Benifits</p>
                                    </div>
                                    <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-10 pt-10 sm:grid">
                        <a className="hover:text-white text-slate-700" href="">
                            <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                <p className=" p-4  clear-right font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5">
                                <img src='/image/bookmark.png' className="w-[30px] h-[30px] float-left" alt="" />
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic  ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a className="hover:text-white text-slate-700" href="">
                                <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                    <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                    <p className=" p-4  clear-right font-semibold">Maintenance Engineering (Elec Bias) - North West-$44k+ Benifits </p>
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                    <div className="flex flex-row gap-4 py-5">
                                        <p className="text-red-700 italic tracking-wide " >Permanent</p>
                                        <p className="text-red-700 italic ">Lanacshire</p>
                                        <p className="text-red-700 italic ">Salary Offer</p>
                                        <p className=" italic  ">:60k + Benifits</p>
                                    </div>
                                    <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-10 pt-10 sm:grid">
                        <a className="hover:text-white text-slate-700" href="">
                            <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                <p className=" p-4  clear-right font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5">
                                <img src='/image/bookmark.png' className="w-[30px] h-[30px] float-left" alt="" />
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic  ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a className="hover:text-white text-slate-700" href="">
                                <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                    <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                    <p className=" p-4  clear-right font-semibold">Maintenance Engineering (Elec Bias) - North West-$44k+ Benifits </p>
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                    <div className="flex flex-row gap-4 py-5">
                                        <p className="text-red-700 italic tracking-wide " >Permanent</p>
                                        <p className="text-red-700 italic ">Lanacshire</p>
                                        <p className="text-red-700 italic ">Salary Offer</p>
                                        <p className=" italic  ">:60k + Benifits</p>
                                    </div>
                                    <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-10 pt-10 sm:grid">
                        <a className="hover:text-white text-slate-700" href="">
                            <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                <p className=" p-4  clear-right font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5">
                                <img src='/image/bookmark.png' className="w-[30px] h-[30px] float-left" alt="" />
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic  ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a className="hover:text-white text-slate-700" href="">
                                <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                    <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                    <p className=" p-4  clear-right font-semibold">Maintenance Engineering (Elec Bias) - North West-$44k+ Benifits </p>
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                    <div className="flex flex-row gap-4 py-5">
                                        <p className="text-red-700 italic tracking-wide " >Permanent</p>
                                        <p className="text-red-700 italic ">Lanacshire</p>
                                        <p className="text-red-700 italic ">Salary Offer</p>
                                        <p className=" italic  ">:60k + Benifits</p>
                                    </div>
                                    <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-10 pt-10 sm:grid">
                        <a className="hover:text-white text-slate-700" href="">
                            <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                <p className=" p-4  clear-right font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5">
                                <img src='/image/bookmark.png' className="w-[30px] h-[30px] float-left" alt="" />
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic  ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a className="hover:text-white text-slate-700" href="">
                                <div className="py-6 hover:bg-slate-700 sm:w-full lg:w-[550px] hover:text-white ">
                                    <img src='/image/breafcase.png' className="w-[100px] mx-4 h-[100px] float-left" alt="" />
                                    <p className=" p-4  clear-right font-semibold">Maintenance Engineering (Elec Bias) - North West-$44k+ Benifits </p>
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                    <div className="flex flex-row gap-4 py-5">
                                        <p className="text-red-700 italic tracking-wide " >Permanent</p>
                                        <p className="text-red-700 italic ">Lanacshire</p>
                                        <p className="text-red-700 italic ">Salary Offer</p>
                                        <p className=" italic  ">:60k + Benifits</p>
                                    </div>
                                    <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
            <Footer/>
    </div>
  )
}
export default SearchJob;
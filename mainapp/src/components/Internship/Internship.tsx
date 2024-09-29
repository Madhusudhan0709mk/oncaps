export default function Internship(){
    return<>
    
    <section className="py-20 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
                <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                    <li className="flex items-center cursor-pointer outline-none group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                                d="M19.7778 9.33333V9.33333C19.7778 8.09337 19.7778 7.47339 19.6415 6.96472C19.2716 5.58436 18.1934 4.50616 16.8131 4.1363C16.3044 4 15.6844 4 14.4444 4C12.963 4 11.4815 4 10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20C11.3333 20 12.6667 20 14 20C15.6554 20 16.4831 20 17.1459 19.7588C18.2569 19.3544 19.1322 18.4791 19.5365 17.3681C19.7778 16.7053 19.7778 15.8776 19.7778 14.2222V14.2222M16.6667 14.2222H20.2222C21.2041 14.2222 22 13.4263 22 12.4444V11.1111C22 10.1293 21.2041 9.33333 20.2222 9.33333H16.6667C15.6848 9.33333 14.8889 10.1293 14.8889 11.1111V12.4444C14.8889 13.4263 15.6848 14.2222 16.6667 14.2222Z"
                                stroke="#4F46E5" strokeWidth="1.5" />
                        </svg>
                        <span
                            className="font-normal text-lg leading-8 text-indigo-600 ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">Finance</span>
                        <button
                            className="flex aspect-square h-6 rounded-full border border-indigo-600  items-center justify-center font-manrope font-medium text-base text-indigo-600  transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">8</button>

                    </li>

                    

                   
                </ul>
                <div className="relative w-full max-w-sm ">
                    <svg className="absolute top-1/2 -translate-y-1/2 left-4 z-50" width="20" height="20"
                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                            stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    <select id="Offer"
                        className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50">
                        <option selected>Sort by time(high to low)</option>
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                        <option value="option 4">option 4</option>
                    </select>
                    <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <svg className="my-7 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                fill="none">
                <path d="M0 1H1216" stroke="#E5E7EB" />
            </svg>
            <div className="grid grid-cols-12 ">
                <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                    <div className="box rounded-xl border border-gray-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-sky-300 p-6 w-full md:max-w-sm">
                        <h6 className="font-medium text-base leading-7 text-black mb-5">Your Workspace</h6>
                        <div className="flex items-center mb-5 gap-1">
                            <div className="relative w-full">
                                <select id="FROM"
                                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                    <option selected>Min</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                    <option value="option 4">option 4</option>
                                </select>
                                <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
                            <div className="relative w-full">
                                <select id="FROM"
                                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                    <option selected>Max</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                    <option value="option 4">option 4</option>
                                </select>
                                <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-600 w-full">Zip
                            Code</label>
                        <div className="relative w-full mb-8">
                            <select id="FROM"
                                className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>Write code</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <button
                            className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                                    stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Search
                        </button>
                    </div>

                    <div className="mt-7 box rounded-xl border border-gray-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-sky-300 p-6 w-full md:max-w-sm">
                        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                            <p className="font-medium text-base leading-7 text-black ">Filter Plans</p>
                            <p
                                className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                                RESET</p>
                        </div>


                        <div className="w-full mb-7">
                            <div className='accordion-group grid grid-cols-1 gap-5 sm:gap-9'
                                data-accordion="default-accordion">
                                <div className='accordion '
                                    id='category-heading-one'>
                                    <button
                                        className='accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600'
                                        aria-controls='category-collapse-one'>
                                        <h5 className="font-medium text-sm text-gray-900">
                                            Availability
                                        </h5>
                                        <svg className='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180'
                                            width='22' height='22' viewBox='0 0 22 22' fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
                                                stroke='currentColor' strokeWidth='1.6' strokeLinecap='round'
                                                strokeLinejoin='round'></path>
                                        </svg>

                                    </button>
                                    <div id='category-collapse-one'
                                        className='accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 '
                                        aria-labelledby='category-heading-one'>
                                        
                                        <div className="box flex flex-col gap-2 mt-5">
                                           
                                            <div className="flex items-center mb-2">
                                                <input id="checkbox-option-1" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                <label htmlFor="checkbox-option-1" className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-1</label>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <input id="checkbox-option-2" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                    <label htmlFor="checkbox-option-2" className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-2</label>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <input id="checkbox-option-3" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-600 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                        <label htmlFor="checkbox-option-3" className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-3</label>
                                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="Offer" className="font-medium text-sm leading-6 text-gray-600 mb-1">Offer</label>
                        <div className="relative w-full mb-7">
                            <select id="Offer"
                                className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>5% off upi discount</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-medium text-sm leading-6 text-black mb-3">Discount</p>
                        <div className="box flex flex-col gap-2">
                            <div className="flex items-center">
                                <input id="checkbox-default-1" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                <label htmlFor="checkbox-default-1" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">20% or more</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox-default-2" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label htmlFor="checkbox-default-2" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">30% or more</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox-default-3" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label htmlFor="checkbox-default-3" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">50% or more</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* list of internships */}
                <div className="col-span-12 md:col-span-9">
                <section className="text-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-5xl">
      
{/* list of internships */}
      <div className="mt-2 flow-root sm:mt-6">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB127364372</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">22 May 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Missing parts</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                </svg>
                Ongoing
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB746253940</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">06 April 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Wrong item</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className="  inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Completed
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB453648693</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">24 March 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Defective item</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className=" inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                Denied
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB234826346</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">24 February 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Color mismatch</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className="  inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Completed
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB127364372</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">12 April 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Missing parts</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                </svg>
                Ongoing
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB746253940</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">30 April 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Wrong item</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className="  inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Completed
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB453648693</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">12 May 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Defective item</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className=" inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                Denied
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 content-center sm:col-span-4 lg:col-span-1">
              <a href="#" className="text-base font-semibold text-gray-900 hover:underline dark:text-white">#FWB234826346</a>
            </div>

            <div className="content-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">23 June 2024</p>
              </div>
            </div>

            <div className="content-center">
              <div className="flex items-center justify-end gap-2 sm:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Reason</span>: Color mismatch</p>
              </div>
            </div>

            <div className="absolute right-0 top-7 content-center sm:relative sm:right-auto sm:top-auto">
              <span className="  inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Completed
              </span>
            </div>

            <div className="col-span-2 content-center sm:col-span-1 sm:justify-self-end">
              <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View details</button>
            </div>
          </div>
        </div>
      </div>

      <nav className="mt-2 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
        <ul className="flex h-8 items-center -space-x-px text-sm">
          <li>
            <a href="#" className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
          </li>
          <li>
            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
          </li>
          <li>
            <a href="#" className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
                </div>
            </div>

        </div>
    </section>

   {/* listing internships */}
   
    </>
}
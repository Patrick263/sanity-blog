/* eslint-disable no-console */
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl lg:mb-5">Patrick's Daily Blog </h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to {""}
                <span className="underline decoration-4 decoration-[#33A7FF]"> Every Developers </span> {""}
                favourite blog in the Atmosphere
            </h2>
        </div>
    
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | The weekly debugging nightmares & More!</p></div>
  )
}

export default Banner
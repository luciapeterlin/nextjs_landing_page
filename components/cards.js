import Image from 'next/image'
import Carousel from '@/components/carousel/carousel';

export default function Cards() {
  	return (
  		<section className="bg-gradient-to-r from-gray-gradient from-50% to-white to-50% mt-2.5 py-10 flex flex-col lg:flex-row lg:pt-24 lg:pb-24 lg:pl-32 lg:mt-0">
  			<div className="px-4 mb-10 lg:w-[40%] xl:w-[30%] lg:mr-2 lg:px-0 lg:pt-0 xl:pt-20">
  				<small className="text-xs tracking-[0.35em] font-bold leading-5 uppercase mb-2.5 text-medium-gray-500">Lorem ipsum</small>
  				<h2 className="text-4xl tracking-[0.05em] leading-10 font-bold mt-3.5 lg:text-5xl lg:leading-[3.75rem]">Lorem ipsum dolor sit amet</h2>
  				<hr className="w-[7.5rem] mt-5 border-t border-primary-blue"></hr>
  				<p className="text-base font-normal leading-6 py-2.5 tracking-wide text-medium-gray-700">Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus</p>
  				<a href="/">
  					<button className="w-full text-primary-blue bg-white border border-primary-blue mt-5 px-6 py-2.5 rounded-sm text-base font-bold leading-6 lg:w-auto">Call to action</button>
  				</a>
  			</div>
  			<div className="pl-4 lg:w-[60%] xl:w-[70%]">
  				<Carousel />
  			</div>
  		</section>
	)
}

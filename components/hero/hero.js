import Image from "next/image"
import classes from '@/components/hero/hero.css';

export default function Hero() {
  	return (
  		<section className="hero-section mt-14 relative lg:mt-0">
  			<div>
  				<figure>
  					<Image src="/cover.webp" alt="AeroNex Cover" width={1920} height={36} />
  				</figure>
  			</div>
  			<div className="hero-text py-7 px-3.5 lg:after:content-[''] lg:after:bg-[url('/arrow-icon.svg')] lg:after:bg-contain lg:after:h-6 lg:after:w-6 lg:after:absolute lg:after:right-10 lg:after:top-10 lg:after:transition-all lg:after:duration-500 lg:bg-white lg:absolute lg:left-0 lg:bottom-0 lg:pt-9 lg:pb-10 lg:pl-32 lg:pr-20 lg:max-w-[606px]">
  				<div className="lg:relative hero-text-content">
  					<small className="text-xs tracking-[0.35em] font-bold leading-5 uppercase mb-2.5 text-medium-gray-500">Lorem ipsum</small>
  					<h1 className="text-3xl tracking-[0.06em] leading-8 mt-2.5 font-bold lg:leading-10 lg:text-4xl">Lorem ipsum dolor sit amet</h1>
  					<hr className="w-[7.5rem] mt-5 border-t border-primary-blue lg:hidden"></hr>
  					<p className="text-base font-normal leading-6 py-2.5 tracking-wide text-medium-gray-700 lg:mt-2.5 lg:hidden">Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus</p>
  					<a href="/">
  						<button className="w-full text-white bg-primary-blue mt-5 px-6 py-2.5 rounded-sm text-base font-bold leading-6 lg:w-auto lg:transition-opacity lg:opacity-0 lg:hidden">Call to action</button>
  					</a>
  				</div>
  			</div>
  		</section>
	)
}

"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import classes from '@/components/carousel/carousel.css';

export default function Carousel({ data }) {

  	return (
  		<>
      		<Swiper
      			className="h-100 w-100"
      			slidesPerView={1.15}
      			spaceBetween={10}
        		pagination={{
					type: 'custom',
	            	renderCustom: function (swiper, current, total) {
	                	return ('0' + current).slice(-2) + '/' + ('0' + total).slice(-2);
	            	},
        		}}
        		navigation={true}
        		loop={false}
        		modules={[Pagination, Navigation]}
        		className="mySwiper"
          		breakpoints={{
    				1024: {
     					slidesPerView: 2.3,
                		spaceBetween: 25,
    				}
  				}}
      		>
		    	{data.map((slideInfo) => (
        			<SwiperSlide key={slideInfo.id}>
		        		<Image src={slideInfo.thumbnailUrl} alt={slideInfo.title} width={388} height={36} className="block w-full rounded-lg"/>
		            	<div className="mt-4 pt-4 leading-5 border-t-2 border-solid border-medium-gray-900 mb-16">
		        			<h6 className="text-xl font-bold mt-1 tracking-widest">{slideInfo.title}</h6>
		                	<p className="text-base font-normal leading-6 py-2.5 tracking-wide text-medium-gray-700">{slideInfo.url}</p>
		                	<a href="/" className="text-sm leading-5 underline text-primary-blue bg-transparent	border-0 underline-offset-4">Call to action</a>
		        		</div>
		        	</SwiperSlide>
      			))}
      		</Swiper>
    	</>
	)
}
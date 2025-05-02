
import React from 'react';
import AppBarChart from './../components/AppBarChart';
import AppAreaChart from '@/components/AppAreaChart';
import MisterComponent from './../components/mister/MisterComponent';



export default function page() {
  return (
    <>
    <div className='grid  grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 mt-20'> 
      <div className='bg-primary-foreground p-4 rounded-lg md:col-span-2 lg:col-span-1 xl:col-span-2'><AppBarChart/></div> 
      <div className='bg-primary-foreground p-4 rounded-lg '>test</div>
      <div className='bg-primary-foreground p-4 rounded-lg'><MisterComponent/></div>
      <div className='bg-primary-foreground p-4 rounded-lg'>test</div>
      <div className='bg-primary-foreground p-4 rounded-lg'><AppAreaChart/></div>
      <div className='bg-primary-foreground p-4 rounded-lg'>test</div> 
 
    </div>
    </>
  );
}

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente ab, dolorum, numquam ducimus explicabo quaerat magnam tempora illum quos provident quis hic facere quia praesentium beatae autem aspernatur accusantium doloremque earum cupiditate tenetur quo rerum. Eaque veritatis non maiores voluptate quibusdam nihil error soluta facilis repellendus perspiciatis laudantium corrupti vero, alias nulla iste labore dolor amet perferendis asperiores fugiat quisquam? Ab nesciunt dolores praesentium!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod at accusamus a deleniti dolores voluptas suscipit quo incidunt dolorum aliquid ad nulla rerum harum consequatur vero nobis, ipsam inventore assumenda!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolore, commodi natus dolorem autem obcaecati sapiente eligendi dolores explicabo sit consectetur repellat alias rerum vitae?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque dolorum distinctio repellat a modi atque aspernatur iure eum debitis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus doloribus, sunt quis cum facilis impedit perferendis beatae tenetur tempora maiores, laudantium aliquid deserunt illum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptational Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae libero repellendus quaerat, quam unde ut placeat est error dolorum deserunt provident vel voluptate beatae ex corrupti consectetur? Officiis, quod!</p>
        </div>
      </div>
      <NewsLetter />

    </div>

  )
}

export default About
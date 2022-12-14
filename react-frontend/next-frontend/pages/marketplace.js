import React from 'react'
import Header from '../components/Header'

function marketplace() {
  return (
    <div className='bg-black'>
    <Header/>
    <div className="p-12 bg-[url('/marketplace.jpeg')]  bg-cover bg-repeat-0 backdrop-blur-3xl h-screen w-full">
        
        <div className='flex backdrop-blur-2xl text-center bg-white bg-opacity-25 rounded-2xl '>
        <h1 className="font-space text-5xl p-5 m-auto font-bold text-center text-white shadow-2xl pb-2">MARKETPLACE</h1>
        </div>
    <div className="inline-flex">

    <div class="m-20 left-20 bg-white bg-opacity-25 w-full max-w-sm rounded-lg backdrop-blur-2xl">
        <a href="#">
            <img class="p-8 w-80 rounded-t-lg" src="/nft1.png" alt="product image"/>
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl p-2 font-semibold tracking-tight text-gray-900 dark:text-white">Sonic Engine Traveller</h5>
            </a>
            <h5 class="text-xl p-2 font-semibold tracking-tight text-gray-900 dark:text-white">Current bid:</h5>
            <div class="flex justify-between items-center">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">35k Coins</span>
                <br/><br/>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bid Now</a>
            </div>
        </div>
    </div>
    <div class="m-20 left-20 bg-white bg-opacity-25 w-full max-w-sm rounded-lg backdrop-blur-2xl">
        <a href="#">
            <img class="p-8 rounded-t-lg w-72" src="/nft2.png" alt="product image"/>
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold p-2 tracking-tight text-gray-900 dark:text-white">Space Tripple Cannon Fighter</h5>
            </a>
            <h5 class="text-xl p-2 font-semibold tracking-tight text-gray-900 dark:text-white">Current bid:</h5>
            <div class="flex justify-between items-center">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">50k Coins</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default marketplace
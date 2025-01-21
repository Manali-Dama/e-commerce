import React from 'react'

const Hero = () => {
  return (
    <section className="hero bg-cyan-100 text-gray-800 py-16 px-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="text-content md:w-1/2">
      <h1 className="text-4xl font-bold mb-4">Affordable Medicines for Everyone</h1>
      <p className="text-lg mb-6">
        High-quality, cost-effective alternatives to branded medicines. Join us in spreading awareness about generic medicines.
      </p>
      <div className="flex space-x-4">
        <a href="/shop" className="bg-cyan-600 text-white py-3 px-6 rounded hover:bg-cyan-700">
          Shop Now
        </a>
        <a href="/Aboutus" className="bg-gray-200 text-gray-800 py-3 px-6 rounded hover:bg-gray-300">
          Learn More
        </a>
      </div>
    </div>
  
  </div>
</section>

  )
}

export default Hero
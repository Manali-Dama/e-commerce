import React from 'react'

const Features = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">
      Why Choose Generic Medicines?
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      <div className="w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        <div className="text-4xl text-blue-500 mb-4">💰</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Affordable Prices
        </h3>
        <p className="text-gray-600">
          Save more without compromising quality.
        </p>
      </div>
      <div className="w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        <div className="text-4xl text-blue-500 mb-4">💊</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Same Effectiveness
        </h3>
        <p className="text-gray-600">
          Provides the same health benefits as branded medicines.
        </p>
      </div>
      <div className="w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        <div className="text-4xl text-blue-500 mb-4">📍</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Wide Availability
        </h3>
        <p className="text-gray-600">
          Easily accessible at pharmacies near you.
        </p>
      </div>
      <div className="w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        <div className="text-4xl text-blue-500 mb-4">✅</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Regulated Quality
        </h3>
        <p className="text-gray-600">
          Manufactured under strict quality controls.
        </p>
      </div>
      {/* <div className="w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        <div className="text-4xl text-blue-500 mb-4">🌿</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Environmentally Friendly
        </h3>
        <p className="text-gray-600">
          Produced with sustainable practices.
        </p>
      </div> */}
      <div className="w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        <div className="text-4xl text-blue-500 mb-4">🌍</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Increased Accessibility
        </h3>
        <p className="text-gray-600">
          Affordable healthcare for everyone.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Features


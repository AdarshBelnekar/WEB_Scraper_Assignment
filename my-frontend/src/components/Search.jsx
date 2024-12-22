import React from 'react'

const Search = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
    <div className="flex space-x-4">
      <input type="text" placeholder="Search by job title" className="flex-1 border border-gray-300 p-2 rounded" />
      <select className="border border-gray-300 p-2 rounded">
        <option>Job type</option>
      </select>
      <select className="border border-gray-300 p-2 rounded">
        <option>Workplace</option>
      </select>
      <select className="border border-gray-300 p-2 rounded">
        <option>Country or timezone</option>
      </select>
      <select className="border border-gray-300 p-2 rounded">
        <option>Seniority</option>
      </select>
      <select className="border border-gray-300 p-2 rounded">
        <option>Pay</option>
      </select>
      <select className="border border-gray-300 p-2 rounded">
        <option>Travel</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </div>
  </div>
  )
}

export default Search

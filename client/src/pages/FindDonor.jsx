


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const FindDonor = () => {

  const bloodDonorsData = [
      {
          "id": 1,
          "name": "John Doe",
          "blood_type": "O+",
          "location": "City, State",
          "last_donated": "2023-01-15",
          "contact": "555-1111"
      },
      {
          "id": 2,
          "name": "Jane Smith",
          "blood_type": "A-",
          "location": "Town, State",
          "last_donated": "2022-12-01",
          "contact": "555-2222"
      },
      {
          "id": 3,
          "name": "Peter Jones",
          "blood_type": "B+",
          "location": "Metropolis",
          "last_donated": "2023-03-20",
          "contact": "555-3333"
      },
      {
          "id": 4,
          "name": "Mary Lee",
          "blood_type": "AB-",
          "location": "Suburbia",
          "last_donated": "2023-02-10",
          "contact": "555-4444"
      },
      {
          "id": 5,
          "name": "Robert Brown",
          "blood_type": "O-",
          "location": "Riverside",
          "last_donated": "2023-04-05",
          "contact": "555-5555"
      }
    ];

  const bloodBanksData = [
      {
        id: 1,
        name: "Global Blood Bank",
        address: "123 Healthway, City, State",
        contact: "555-1234"
      },
      {
        id: 2,
        name: "Community Blood Center",
        address: "456 Lifeline Rd, Town, State",
        contact: "555-5678"
      },
      {
        id: 3,
        name: "National Blood Service",
        address: "789 Vitality Ave, Capital City",
        contact: "555-9012"
      },
      {
        id: 4,
        name: "City Health Blood Bank",
        address: "101 Care Street, Metropolis",
        contact: "555-3456"
      }
    ];

  const [activeTab, setActiveTab] = useState("banks");
  const navigate = useNavigate();

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("donors")}
            className={`px-6 py-2 rounded-full border transition-all duration-200 ${activeTab === "donors" ? "bg-red-600 text-white shadow-md" : "bg-white text-gray-800"}`}
          >
            Blood Donors
          </button>
          <button
            onClick={() => setActiveTab("banks")}
            className={`px-6 py-2 rounded-full border transition-all duration-200 ${activeTab === "banks" ? "bg-red-600 text-white shadow-md" : "bg-white text-gray-800"}`}
          >
            Blood Banks
          </button>
        </div>

        <h2 className="text-2xl text-center font-bold mb-6 text-left">{activeTab === "banks" ? "Available Blood Banks" : "Available Blood Donors"}</h2>

        <div className="flex flex-col space-y-6">
          {activeTab === "banks" && (
            bloodBanksData.map((bank) => (
              <div
                key={bank.id}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{bank.name}</h3>
                  <p className="text-sm text-gray-600">{bank.address}</p>
                  <p className="text-sm text-gray-600 mt-1">Contact Number : {bank.contact}</p>
                </div>
                <button onClick={() => navigate('/login')} className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors duration-200">
                  View details
                </button>
              </div>
            ))
          )}

          {activeTab === "donors" && (
            bloodDonorsData.map((donor) => (
              <div
                key={donor.id}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{donor.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">Blood Type : <span className="font-semibold">{donor.blood_type}</span></p>
                  <p className="text-sm text-gray-600">Locat  ion : {donor.location}</p>
                  <p className="text-sm text-gray-600 mt-1">Last Donated : {donor.last_donated}</p>
                </div>
                <button onClick={() => navigate('/login')} className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors duration-200">
                  View details
                </button>
              </div>
            ))
          )}
        </div>
        </div>
      </section>
    </>

  )
}

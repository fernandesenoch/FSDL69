import { useState } from "react";

const housePlans = {
  "1bhk": "https://via.placeholder.com/500x300?text=1BHK+Floor+Plan",
  "2bhk": "https://via.placeholder.com/500x300?text=2BHK+Floor+Plan",
  "3bhk": "https://via.placeholder.com/500x300?text=3BHK+Floor+Plan"
};

function HousePlanSelector() {
  const [input, setInput] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerInput = input.toLowerCase();
    if (housePlans[lowerInput]) {
      setSelectedPlan(housePlans[lowerInput]);
    } else {
      setSelectedPlan(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">House Plan Selector</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
        <input 
          type="text" 
          placeholder="Enter 1BHK, 2BHK, or 3BHK" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="border p-3 rounded-lg text-lg w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {selectedPlan ? (
        <div className="border p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Floor Plan:</h2>
          <img src={selectedPlan} alt="House Plan" className="rounded-lg shadow-md" />
        </div>
      ) : input && (
        <p className="text-red-500 text-lg font-medium">Invalid input! Please enter 1BHK, 2BHK, or 3BHK.</p>
      )}
    </div>
  );
}

export default HousePlanSelector;

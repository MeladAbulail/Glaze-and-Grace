import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OldPurchasesTable = ({ items }) => {
  return (
    <table className="p-4 mt-4 table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Item Image</th>
          <th className="px-4 py-2">Item Name</th>
          <th className="px-4 py-2">Count</th>
          <th className="px-4 py-2">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-2">
              <img src={item.image} alt={item.title} width="50" height="50" />
            </td>
            <td className="px-4 py-2">{item.title}</td>
            <td className="px-4 py-2">{item.count}</td>
            <td className="px-4 py-2">${item.total_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const OldPurchasesSection = () => {
  const [oldPurchases, setOldPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setIsLoading(false);
        setOldPurchases(response.data.slice(0, 5));
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-[#F9EFE6] mx-auto w-full md:w-[calc(100% - 3rem)] max-w-screen-xl md:space-x-4 justify-center">
      <h3 className="text-2xl font-bold">Old Purchases</h3>
      {isLoading ? (
        <p>Loading old purchases...</p>
      ) : (
        <OldPurchasesTable items={oldPurchases} />
      )}
    </div>
  );
};

export default OldPurchasesSection;
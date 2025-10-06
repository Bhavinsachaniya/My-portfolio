import React, { useState, useEffect } from 'react';
import { EyeIcon } from './Icons';

const VisitorCount: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const countKey = 'portfolioTotalVisits';
    
    // Get the current count from localStorage, or initialize to 0
    let currentCount = Number(localStorage.getItem(countKey)) || 0;

    // Increment the count for the new visit
    currentCount++;

    // Save the new count back to localStorage
    localStorage.setItem(countKey, String(currentCount));

    // Update the state to display the new count
    setCount(currentCount);
  }, []);

  // Don't render until count is initialized from storage to avoid flicker
  if (count === null) {
    return null; 
  }

  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm">
      <EyeIcon />
      <span>{count.toLocaleString()}</span>
    </div>
  );
};

export default VisitorCount;
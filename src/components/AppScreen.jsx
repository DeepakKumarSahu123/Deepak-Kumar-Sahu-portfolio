import React from 'react';

const AppScreen = ({ title, children, onClose }) => {
  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
        <h2 className="text-sm font-semibold dark:text-white">{title}</h2>
        <button
          onClick={onClose}
          className="text-red-500 cursor-pointer hover:text-red-700 text-sm font-bold"
        >
          ❌
        </button>
      </div>
      <div className="p-4 overflow-auto">{children}</div>
    </div>
  );
};

export default AppScreen;

import React from 'react'

const PhoneFrame = ({children}) => {
  return (
    <div className="h-screen bg-gray-200 dark:bg-black flex items-center justify-center">
    <div className="phone-wallpaper w-[360px] min-w-[360px] h-[700px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-[14px] border-black dark:border-gray-400 relative overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-black dark:bg-white text-white dark:text-black text-center py-2 text-sm font-bold">
        Vivo 
      </div>

      {/* Render App Content inside */}
      {children}

    </div>
  </div>
  )
}

export default PhoneFrame
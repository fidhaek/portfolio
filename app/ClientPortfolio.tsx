'use client'

import { useState, useEffect } from 'react'

export default function ClientPortfolio() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"></div>
  }

  // Return the same portfolio content here
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Your portfolio content */}
    </div>
  )
}
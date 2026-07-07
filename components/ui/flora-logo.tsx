'use client'

import React from 'react'

export function FloraLogo({ 
  className, 
  size = 40
}: { 
  className?: string
  size?: number
}) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ''}`} style={{ width: size, height: size }}>
      <img 
        src="/images/flora-brand-logo.png" 
        alt="Flora Wedding Planners Logo" 
        className="w-full h-full object-contain select-none rounded-full"
      />
    </div>
  )
}

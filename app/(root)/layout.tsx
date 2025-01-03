import React from 'react'
import SIdebar from '@/components/shared/SIdebar'

const layout = ({children } : {children : React.ReactNode}) => {
  return (
    <main className = "root">
      <SIdebar/>
        <div  className = "root-container">
            <div className = "wrapper">
                    {children}

            </div>
        </div>
    </main>
    
  )
}

export default layout
import { ThemeProvider } from 'next-themes';
import React from 'react'

const ThemeWrapper = ({children}) => {
  return (
    <div>
       <ThemeProvider attribute="class" enableSystem={true}>
          {children}
        </ThemeProvider>
    </div>
  )
}

export default ThemeWrapper

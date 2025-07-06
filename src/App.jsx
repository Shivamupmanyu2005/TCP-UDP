import React from 'react'
import './App.css'

import MessagePanel from './Components/MessagePanel'
import {MessageProvider} from './Context/MessageContext'
import TCPPanel from './Components/TCPPanel'
import UDPPanel from './Components/UDPPanel'

function App() {
 

  return (
    <>
  
   
   <MessageProvider>
 <MessagePanel />
 <div className="flex flex-row items-start justify-center w-full gap-8">
  <TCPPanel />
  <UDPPanel />
</div>
 </MessageProvider> 
    
      
    </>
  )
}

export default App

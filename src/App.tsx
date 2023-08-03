import { useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import Stack from "./stack"
import { fruitEmojis } from "./data"

function App() {
  
  const [parent] = useAutoAnimate()
  const [stack, setStack] = useState(new Stack())

  const setStackFn = (callback: Function) => {
    return () => setStack(prevStack => {
      const newStack = prevStack.copy()
      callback(newStack)
      return newStack
    })
  }

  
  return (
    <main>
      <div className="stack-parent" ref={parent}>
        { stack.toArray().map((value, index) => {
          return <div key={index} className="stack-item">{value}</div>
        })}
      </div>
      <div>
        <button 
          onClick={setStackFn((s: Stack) => s.push(fruitEmojis[s.length()]))}
        >Push</button>
        <button
          onClick={setStackFn((s: Stack) => s.pop())}>
         Pop
        </button>
      </div>
    </main>
    
  )
}

export default App

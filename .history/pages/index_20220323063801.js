// import Split from "split.js";
import { useRef, useEffect } from "react";


 

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  let one , two
  useEffect(async() => {
     
    one = aRef.current
    two = bRef.current

    split()
  }, [split])
  
 
    Split([".a", ".b"], {
      gutterSize: 5,
      sizes: [20,80]
    }) 
  }
 
  return (
    <div className="content">
        <div id="one" ref={aRef} className="split a">A</div>
        <div id="two" ref={bRef} className="split b">B</div>
    </div>
  )
}

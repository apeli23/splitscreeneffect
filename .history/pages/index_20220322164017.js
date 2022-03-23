import Split from 'split.js';
import {useRef, useEffect} from "react";

export default function Home() {
  const aRef= useRef()
  const bRef = useRef;
  
  useEffect(() => {
    Split([aRef.current], {
      gutterSize: 5,
      sizes: [20, 80]
    })

  })
  return (
    <div className="content">
      <div className="split ">
        <div ref={} className="a">
          A
        </div>
      </div>
      <div className="split ">
        <div className="b">
          B
        </div>
      </div>
    </div>
  )
}

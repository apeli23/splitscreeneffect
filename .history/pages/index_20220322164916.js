import Split from 'split.js';
import {useRef, useEffect} from "react";

export default function Home() {
  const aRef= useRef()
  const bRef = useRef;
  
  useEffect(() => {
 var split = Split([aRef.current, bRef.current], {
   gutterSize: 5,
   sizes: [20, 80]
 } );

  })
  return (
    <div ref={aRef} className="content">
      <div className="split ">
        <div className="a">
          A
        </div>
      </div>
      <div className="split ">
        <div ref={bRef}  className="b">
          B
        </div>
      </div>
    </div>
  )
}

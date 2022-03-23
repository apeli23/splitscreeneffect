import Split from 'split.js';
import {useRef, useEffect} from "react";

export default function Home() {
  const aRef= useRef()
  const bRef = useRef;
  
  useEffect(() => {
 var split = Split(selector[aRef.current, bRef.current], {
   gutterSize: 5,
   sizes
 } );

  })
  return (
    <div className="content">
      <div className="split ">
        <div ref={aRef} className="a">
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

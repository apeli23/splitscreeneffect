import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef()
  const bRef = useRef();
  const cRef = useRef();

  useEffect(async () => {
    Split([aRef.current, bRef.current, cRef.current], {
      gutterSize: 5,
      sizes: [20, 80, 0]
    });
  })
  return (
    <div className="content">
      <div ref={aRef} className="split ">
        <div className="a">
          A
        </div>
      </div>
      <div ref={bRef} className="split ">
        <div className="b">
          B
        </div>
      </div>
      <div ref={cRef} className="split ">
        <div className="c">
          C
        </div>
      </div>
      
    </div>
  )
}

import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  const cRef = useRef(undefined);

  useEffect(async () => {
    const one =document.getElementById("one")
    const two = document.getElementById("two")
    const three = document.getElementById("three")

    console.log(aRef.current)
    Split(["one", "two", "three"], {
      gutterSize: 1,
      sizes: [80]
    });
  })
  return (
    <div className="content">
      <div id="one" ref={aRef} className="split ">
        <div className="a">
          A
        </div>
      </div>
      <div id="two" ref={bRef} className="split ">
        <div className="b">
          B
        </div>
      </div>
      <div id="three" ref={cRef} className="split ">
        <div className="c">
          C
        </div>
      </div>
    </div>
  )
}

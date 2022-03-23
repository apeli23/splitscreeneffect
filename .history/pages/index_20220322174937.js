import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  const cRef = useRef(undefined);

  useEffect(() => {
    Split([aRef.current, bRef.current ], {
      gutterSize: 1,
      sizes: [20, 80, 20]
    }, [backgroundHandler]);
  })

  const backgroundHandler = () => {
    document.getElementById("one").style.backgroundImage = `url(${background})`
    document.getElementById("two").style.backgroundImage = `url(${background})`
    document.getElementById("three").style.backgroundImage = `url(${background})`
  }
  return (
      <div className="content">
        {/* <div id="one" ref={aRef} className="split a">
            A
          <div id="two" ref={bRef} className="split b">
              B
          </div>
        </div> */}
        <div className="content">
        <div ref={aRef} className="split a">A</div>
        <div ref = {bRef} className="split b">B</div>
    </div>
      </div>
  )
}

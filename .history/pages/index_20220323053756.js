import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  const cRef = useRef(undefined);

  useEffect(() => {
      const one =document.getElementById("one")
      const two = document.getElementById("two")
      // const three = document.getElementById("three")
      Split([one, two], {
        gutterSize: 5,
        sizes: [20,80]
      });
  })

  const backgroundHandler = () => {
    document.getElementById("one").style.backgroundImage = `url(${background})`
    document.getElementById("two").style.backgroundImage = `url(${background})`
    document.getElementById("three").style.backgroundImage = `url(${background})`
  }
  return (
    <div className="home">
    <div className="content">
      <div id="one"  className="split ">
        <div ref={aRef} className="a">
          A
        </div>
      </div>
      <div id="two" className="split ">
        <div ref={bRef}  className="b">
          B
        </div>
      </div>
      <div id="three"  className="split ">
        <div ref={cRef} className="c">
          c
        </div>
      </div> 
    </div>
     
    </div>
  )
}

import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  const cRef = useRef(undefined);

  useEffect(() => {
    Split([aRef.current, bRef.current, cRef.current], {
      gutterSize: 5,
      sizes: [25,25, 50]
    },[]);

    console.log(aRef.current)
  }, [])

  const backgroundHandler = () => {
    document.getElementById("one").style.backgroundImage = `url(${background})`
    document.getElementById("two").style.backgroundImage = `url(${background})`
    // document.getElementById("three").style.backgroundImage = `url(${background})`
  }
  return (

    <div className="content">
      <div ref={aRef} className="split" id ="a">
        A
      </div>
      <div ref={bRef} className="split">
        <div className="b">B</div>
      </div>
      <div ref={cRef} className="split">
        <div className="c">C</div>
      </div>
    </div>
  )
}

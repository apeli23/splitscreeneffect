import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  const cRef = useRef(undefined);

  // useEffect(() => {
  //   Split([aRef.current, bRef.current, cRef.current], {
  //     gutterSize: 1,
  //     sizes: [20, 80, 20]
  //   }, [backgroundHandler]);
  // })

  const backgroundHandler = () => {
    document.getElementById("one").style.backgroundImage = `url(${background})`
    document.getElementById("two").style.backgroundImage = `url(${background})`
    document.getElementById("three").style.backgroundImage = `url(${background})`
  }
  return (
    <div className="home">
      <div className="content">
        <div id="one" ref={aRef} className="split">
          <div className="a">
            A
          </div>
        </div>
       
          
        </div>
      </div>
    </div>
  )
}

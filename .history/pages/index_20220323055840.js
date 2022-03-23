import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);
  let one , two
  useEffect(async() => {
    console.log(aRef.current)
     
    one = aRef.current
    two = bRef.current
  }, [])

  var split = Split([one, two], {
    gutterSize: 5,
    sizes: [20,80]
  }) 
  // const backgroundHandler = () => {
  //   document.getElementById("one").style.backgroundImage = `url(${background})`
  //   document.getElementById("two").style.backgroundImage = `url(${background})`
  //   document.getElementById("three").style.backgroundImage = `url(${background})`
  // }
  return (
    <div className="content">
        <div id="one" ref={aRef} className="split a">A</div>
        <div id="two" ref={bRef} className="split b">B</div>
    </div>
  )
}

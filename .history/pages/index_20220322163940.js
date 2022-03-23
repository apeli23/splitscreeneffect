import Split from 'split.js';
import {useRef, useEffect} from "react";

export default function Home() {
  const aRef= useRef()
  const bRef = useRef;
  Split(["a"], {
    gutterSize: 5,
    sizes: [20, 80]
  })
  useEffect(())
  return (
    <div className="content">
      <div className="split ">
        <div className="a">
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

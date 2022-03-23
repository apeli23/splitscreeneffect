import Split from "split.js";
import {useEffect} from 'react';

export default function Home() {
  

  useEffect(() => {
    Split([".a", ".b", ".c"], {
      gutterSize: 5
    })
  })
  return (
    <div className="content">
        <div className="cell a">A</div>
        <div className="cell b">B</div>
        <div className="cell c">C</div>
    </div>
  )
}

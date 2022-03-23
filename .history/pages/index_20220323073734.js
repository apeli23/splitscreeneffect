import Split from "split.js";
import useEffect from 'react';

export default function Home() {
  Split([".cella", ".cellb", ".cellc"], {
    gutterSize: 5
  })

  useEffect(() => )
  return (
    <div className="content">
        <div className="cella">A</div>
        <div className="cellb">B</div>
        <div className="cellc">C</div>
    </div>
  )
}

import Split from 'split.js';
import {useRef}

export default function Home() {

  Split(["a"], {
    gutterSize: 5,
    sizes: [20, 80]
  })
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

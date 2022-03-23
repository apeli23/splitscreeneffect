import Split from 'split.js';

export default function Home() {
  var split = Split(<div|selector["a"]> elements, <options> options?)
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

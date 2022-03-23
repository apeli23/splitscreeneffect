import Split from 'split.js';

export default function Home() {
  
  Split(["a"], {
    gutterSize: 5,
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

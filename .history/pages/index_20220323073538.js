import Split from "split.js";

export default function Home() {
  Split([".cella", ".cellb", ".cellc"], {
    gut
  })
  return (
    <div className="content">
        <div className="cella">A</div>
        <div className="cellb">B</div>
        <div className="cellc">C</div>
    </div>
  )
}

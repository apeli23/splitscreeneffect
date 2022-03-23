import Split from "split.js";

export default function Home() {
  Split([".a", ".b", ".c"])
  return (
    <div className="content">
        <div className="cella">A</div>
        <div className="cellb">B</div>
        <div className="cell c">C</div>
    </div>
  )
}

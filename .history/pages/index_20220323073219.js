import Split from "split.js";

export default function Home() {
  Split([".a", ".b", ".c"])
  return (
    <div className="content">
        <div className="cell">A</div>
        <div className="cell b">B</div>
        <div className="cell c">C</div>
    </div>
  )
}

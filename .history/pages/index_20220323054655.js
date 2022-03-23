import Split from 'split.js';
import { useRef, useEffect } from "react";

export default function Home() {
  const aRef = useRef(undefined)
  const bRef = useRef(undefined);

  useEffect(() => {
    const one = document.getElementById("one")
    const two = document.getElementById("two")
    // const three = document.getElementById("three")
    Split([one, two], {
      gutterSize: 5,
      sizes: [20, 80]
    });
  })

  const backgroundHandler = () => {
    document.getElementById("one").style.backgroundImage = `url(${background})`
    document.getElementById("two").style.backgroundImage = `url(${background})`
    document.getElementById("three").style.backgroundImage = `url(${background})`
  }
  return (
    <div class="content">
        <div class="split a">A</div>
        <div class="split b">B</div>
    </div>
  )
}

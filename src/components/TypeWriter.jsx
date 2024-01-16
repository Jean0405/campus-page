"use client"
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TypeWriter({children, customClass}) {
  const [text] = useTypewriter({
    words: [children],
    loop: true,
    typeSpeed:100,
    delaySpeed:2500,
    deleteSpeed:100
  });
  
  return (
    <p className={customClass}>{text}<Cursor/></p>
  )
}

export default TypeWriter
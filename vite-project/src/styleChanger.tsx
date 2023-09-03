import { useRef } from "react"

const StyleChanger = () => {
    let firstColorRef = useRef<HTMLDivElement>(null);
    let secondColorRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <div ref={firstColorRef} style={{backgroundColor:'blue', width: '100px', height:'100px', color:'yellow'}}>I am a blue div</div>
    <div ref={secondColorRef} style={{backgroundColor: 'red', width: '100px', height:'100px', color:'yellow'}}>I am a red div</div>
        <button onClick={()=>{
            firstColorRef.current!.textContent = 'i am red';
            secondColorRef.current!.textContent = 'I am blue';
        }}>switch colores</button>
        <button onClick={()=>{
            firstColorRef.current!.style.backgroundColor = 'white';
            secondColorRef.current!.style.backgroundColor = 'white';
        }}>change to white</button>
    </>
  )
}

export default StyleChanger
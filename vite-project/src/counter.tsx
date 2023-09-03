import { useRef } from "react"

function Counter () {
    let Counter = 0;
    let divRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div>
                <button onClick={()=> {
                    if (divRef.current && divRef.current.textContent){
                        divRef.current.textContent = (+divRef.current.textContent + 1).toString();
                    };
                }}>add</button>
            </div>
            <div ref={divRef}>{Counter}</div>
            <div>
                <button onClick={()=> {
                    if (divRef.current !== null){
                    divRef.current.textContent = '0'
                    }
                }}>go back to zero</button>
            </div>
        </>
    )
}

export default Counter
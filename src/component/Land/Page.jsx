import {React,useRef} from "react";
import './page.css'
import bg1 from './12.jpg'
import bg2 from './13.jpg'
import bg3 from './14.jpg'
import bg4 from './15.jpg'
import bg5 from './16.jpg'
import bg6 from './17.jpg'
import bg7 from './18.jpg'

const Page=()=>
{

    let imageContainerRef=useRef(null)
    const images=[bg1,bg2,bg3,bg4,bg5,bg6,bg7]
    const prev=()=>imageContainerRef.current.scrollLeft -=250
    const next=()=>imageContainerRef.current.scrollLeft +=250
    return(
        <div className="page-container">
            <div className="prev" onClick={prev}></div>
            <div className="slide-panel" ref={imageContainerRef}>
                {images.map(image=>{return (<img src={image}/>)})}
            </div>
            <div className="next" onClick={next}></div>
        </div>
    )
}

export default Page;
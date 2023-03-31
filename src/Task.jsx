import React,{useState} from 'react'
import './task.css'

const Task = () => {

    const[text,change]=useState("")
    const[co,changecount]=useState(0)
    const[wr,word]=useState(0)

    const textchange =(e)=>{
        const x=e.target.value

        change(x)
        changecount(x.split(" ").join("").length)
        word(x.trim().split(" ").length)

    }

    const upper = ()=>{
        change(text.toLocaleUpperCase())
    }

    const lower = ()=>{
        change(text.toLocaleLowerCase())
    }


  return (
    <div className='back'>
    <textarea  onChange={textchange} value={text} className="prim" /><br/>

    <button onClick={upper} className='btn'>Upper case</button>
    <button onClick={lower} className='btn'>Lower case</button>
    <h3>Total letter{co}</h3> <h3>total words{wr}</h3>
   
    </div>
  )
}

export default Task
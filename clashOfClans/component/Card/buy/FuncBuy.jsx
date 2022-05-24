import React from 'react'

export default function FuncBuy(props) {
    function clickHandle(){
        setTimeout(function(){
            alert(props.name)
        },2000)
    }
    return (
        <div >
        <div  className="badge bg-danger" onClick={clickHandle}>Buy </div> 
        <div>functionn</div>
    </div>
    )
}

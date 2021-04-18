import React from 'react';


const Car =(props) =>{

    const colorInfo = props.color ? (<p>model :{props.color}</p> ): (<p>model : non péciser</p>)
    
    if(props.children){
        return (
            <div style={{ backgroundColor: ' pink' , width: '200px', margin:' 5px auto' }}>
            <p>marque : {props.children}</p>
            {colorInfo}
        </div>
        )
    }else {
        return (
            <div style={{ backgroundColor: ' pink' , width: '200px', margin:' 5px auto' }}>
                <p>marque : nothing</p>
                {colorInfo}
            </div>
        )

        
    }

    // return(
    //     <div style={{ backgroundColor: ' pink' , width: '200px', margin:' 5px auto' }}>
    //         <p>marque : {props.children}</p>
    //         {colorInfo}
    //     </div>
    // )
}
export default Car;
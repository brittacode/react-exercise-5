import { useState } from "react"
export function ArraysEx (){



    const  [colors, setColor] = useState(['red', 'yellow','orange']); 

    

    function addColor(color:string){
        setColor([...colors, color]);
    }

   
    return(
       <div>
       <ol>

        {colors.map((color, i) => <li key = {i}>{color}</li> )}

       </ol> 

      
       <button onClick={() => addColor( 'purple')} > purple </button>
       <button onClick={() => addColor( 'yellow')} > Yellow </button>
       <button onClick={() => addColor('green')} > Green </button>


       {/* <table>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Type</th>
            </tr>
            {pets.map(pet => <tr>

                <td></td>
                <td></td>
                <td></td>
                <td><button onClick = {() => }></button></td>


            </tr>)
            
            }

       </table>
 */}

       </div>
       
    )

    } 



    

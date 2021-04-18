import React from 'react';
import Profilecomponent from './Profilecomponent ';


const ParentComponent = () => {
    const handleAlert = (FullName) => alert(`utilisateur ${FullName}`);
  const myStyle={  textAlign:"center"}
    return (
    <div style={myStyle}>
        <Profilecomponent
        FullName=" mondher denden" 
        Bio= "je suis fonctionnaire au ministere de jeunesse et de sport  "
        Profession="fonctionnaire au ministre de jeunesse et de sport"
        handleAlert={handleAlert}
        >
        <div>
        <h2 style={{color: "red", background:"blue", border: "solid 5px peachpuff", borderRadius:"20%"}}>Ma photo</h2>
        <img style={{border: "solid 5px yellow", borderRadius:"80%" , height: "200px", width:"500"}} src='/photo.jpg' alt="myimage"/>
        </div>
        </Profilecomponent>
    </div>
      );
    };
    
export default ParentComponent;



import React from "react";
import Box from "../component/Box";

function Container() {

    const [visual, setVisual]= React.useState();
    const [sort, setSort]= React.useState("none");

    React.useEffect(()=>{

        let newArray;

        if(sort==="e"){
            newArray=visual.filter(function(it) {
                return it.name.includes("e");
            });
        }else if(sort==="noE"){
            newArray=visual.filter(function(it) {
                return !it.name.includes("e");
            });
        }else{
            newArray=visual;
        }


        setVisual(newArray);

    },[visual,sort]);


//    const maleDogs = dogs.filter((dog) => dog.gender === 'male')

    let buttons = visual.map((dt, idx) =>
        <Box key={idx} dt={dt}/>
    );

    return (
        <div className="container">
            {buttons}
        </div>
    )
}

export default Container;

//<button onClick={()=>setSort("e")}>Check if it has the letter E</button>
//<button onClick={()=>setSort("noE")}>Check if it does not have the letter E</button>
//<button onClick={()=>setSort("none")}>Clear</button>
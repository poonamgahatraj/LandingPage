import Content from "./content";

export default function Container (){
    return(
        <>
        <div style={{width:"100%",position:'relative'}}>
        <div className="Header"style={{background: 'linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%)'}}>
           <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',color:"white",paddingLeft:"4%",paddingRight:"4%",fontWeight:"500"}}>
           <p style={{fontSize:"20px"}}> MNTN</p>
            <div style={{display:"flex",justifyContent:'space-between',alignItems:'center',width:"20%"}}>
                <p>Equipment</p>
                <p>About us</p>
                <p>Blog</p>
            </div>
        <p>Account</p>
           </div>
           <div style={{color:"white",marginTop:"10%",display:'flex',alignItems:"center",marginLeft:'5%',marginRight:"0%",justifyContent:"space-between"}}>

            <div>
            <img src=".\Social (1).svg"></img>

            </div>
            <div style={{display:"flex",flexDirection:"column",width:"51%"}}>
           <div style={{display:"flex",alignItems:"center",width:"30%"}}>
                    <div style={{border:"1.5px solid #FBD784 ",width:"12%", marginRight:"4%"}}></div>
                <p style={{color:"#FBD784",fontWeight:"500",letterSpacing:"2px"}}>A HIKING GUIDE</p>
                </div>

            <p style={{fontStyle:"Chronicle Display",fontSize:"60px",margin:"0"}}>Be Prepared For The Mountains And Beyond!</p>
            <p>Scroll down</p>
            </div>
            <div>
                <img src=".\Slider.png"></img>
            </div>
           </div>


      
        <div className="ImageSection" style={{position:'relative',background:" linear-gradient(rgba(11, 29, 38, 0))"

}}>
            
           
            <img src=".\bgimage2.png" style={{width:"100%"}}>
           
            </img>
            <img src=".\bgimage3.png" style={{width:"100%",position:"absolute",top:"30%",left:"0",background:" linear-gradient(rgba(11, 29, 38, 0))"}}></img> 
            {/* <img src=".\image4.png"style={{position:"absolute",left:"0",top:"50%",width:"100%"}}> 
               
            </img> */}

          
        </div>

         
        </div>
        <div style={{position:"absolute",top:"85%"}} >
        <Content  /> 
        </div>
        
        </div>
        
        </>
    )
}
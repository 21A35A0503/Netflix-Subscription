import React,{useState} from "react";
function App(){
  const[plan,setPlan]=useState("");
  const[price,setPrice]=useState("");
  const[status,setStatus]=useState(true);
  const upgradePlan=()=>{
     if(plan===""){
      setPlan("Basic");
      setPrice("199");
    }
     else if(plan==="Basic"){
      setPlan("Standard");
      setPrice("499");
    }
    else if(plan==="Standard"){
      setPlan("Premium");
      setPrice("799");
    }
  };
  const pauseSubscription=()=>{
    setStatus(false);
  };
  const resumeSubscription=()=>{
    setStatus(true);
  };
  return(
    <div style={{padding:"90px",
      minHeight:"100vh",
      backgroundColor:"white",
      textAlign:"center",fontFamily:"Arial"}}>
        <h1>Netflix Subscription</h1>
        <h2>Current Plan: {plan}</h2>
        <h3>Price: ${price}/month</h3>
        <h3>Status: {status?"Active":"Paused"}</h3>
        {status?(<p><b>✅ Enjoy your shows!</b></p>):(<p><b>❌ Subscription Paused</b></p>)}
        {plan==="Premium" && <h3>⭐ Ultra HD Enabled</h3>}
        <div style={{marginTop:"20px"}}>
          <button onClick={upgradePlan} 
            style={{margin:"10px",padding:"10px 20px",fontSize:"16px",backgroundColor:"#dd8a2c",color:"#fff",borderStyle:"none"}}>
              Upgrade Plan </button>
          <button onClick={pauseSubscription}
            style={{margin:"10px",padding:"10px 20px",fontSize:"16px",backgroundColor:"#dd8a2c",color:"#fff",borderStyle:"none"}}>
              Pause Subscription </button>
          <button onClick={resumeSubscription}
            style={{margin:"10px",padding:"10px 20px",fontSize:"16px",backgroundColor:"#dd8a2c",color:"#fff",borderStyle:"none"}}>
              Resume Subscription </button>
        </div>
    </div>
  );
}
export default App;

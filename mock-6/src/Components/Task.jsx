import React from "react";
import { useState, useEffect} from "react";


const obj = {
  task: ""
};
function Task() {

  const [form, setForm] = useState(obj);

  const [user, setuser] = useState([])

  const [userdata, setuserdata] = useState([])

  useEffect(() => {
    fetch("https://json-deploy-fr7l.onrender.com/users").then((res)=>{
        return res.json()
    }).then((resp)=>{
  
        setuser(resp)
    }).catch((er)=>{
        console.log(er.message)
    })
}, [])

    useEffect(() => {
        fetch("https://json-deploy-fr7l.onrender.com/todos").then((res)=>{
            return res.json()
        }).then((resp)=>{
            setuserdata(resp)
        }).catch((er)=>{
            console.log(er.message)
        })
    }, [])

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }


  function handleBtn(e) {
    e.preventDefault();
    console.log(form);
    const { password,  confirmPassword } = form;
    if (password !=  confirmPassword) {
      alert("Password are not match");
    } else {
      userAddedfunc(form);
    }
  }

    function userAddedfunc(data) {
    if(userdata.length<5){
            fetch("https://json-deploy-fr7l.onrender.com/todos", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json",
        },
        }).then((res) =>{
            alert("Task added Successfully")
            window.location.reload()
        });
    }
    else{
        alert("Daily limit exceeded")
    }
  }

  async function handleDel(id){
        fetch(`https://json-deploy-fr7l.onrender.com/todos${id}`, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        }).then((res) =>{
            alert("Task deleted Successfully")
            window.location.reload()
        });
    // console.log(id)
  }



  return (

   
    <div className="taskDiv">
        <div className="box">
            {
                user && user.map(e=>(
                    <div> 
                        <h2>{e.username}</h2>
                        <p>good see you here</p>
                        <h3>{`Your total daily task is ${userdata.length}`}</h3>
                    </div>
                ))
            }
        </div>

        <div className="box">
            {
                userdata && userdata.map(e=>(
                    <div> 
                        <h1>{e.id}</h1>
                        <h2>{e.task}</h2>
                        <h3 onClick={()=>handleDel(e.id)}><i class="fa-solid fa-trash"></i></h3>
                    </div>
                ))
            }
        </div>
        

      <form onSubmit={(e) => handleBtn(e)}>
        <div className="box">
        <h3 style={{textAlign:"center"}} >Added Your Task</h3 >
        <br />
        <input
          type="text"
          placeholder="added your Task"
          name="task"
          onChange={(e) => handleInput(e)}/><br />
        <br />
        <input  type="submit" />
        </div>
      </form>
      
      
    </div>
  );
}


export default Task;
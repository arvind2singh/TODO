

import React, {useState, useEffect} from 'react'
//import todo from "../images/todo.svg";
import "../App.css"



const UserList = () => {

     const [user_list, setUserList] = useState([]);
     const [per_page, setPerPage] = useState([]);
     const [total, setTotal] = useState([]);
     const [per_page, setPerPage] = useState([]);

    // useEffect(async () => {
    //     const res = fetch(`https://reqres.in/api/users`, {
    //         headers: {
    //             page: 2
    //         }
    //     })
    //     const d = await res.json()
    // }, [])
    useEffect(() => {
        fetch("https://reqres.in/api/users",{
            headers: {
                page: 2
            }
        })
          .then(res => res.json())
          .then(
            (result) => {
                setUserList(result);
                console.log(result.data)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
          )
      }, [])
    return (
        <>
            <div className="main-div">  
                    <div className="showItems">
{/*                         
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                      </div>
                                  
                                )
                            })

                        } */}
                       
                    </div>
                
                   
                </div>
        </>
    )
}


export default UserList
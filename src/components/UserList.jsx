

import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
//import todo from "../images/todo.svg";
import "../App.css"



const UserList = () => {

    const [user_list1, setUserList1] = useState([]);
    const [user_list, setUserList] = useState([]);
     const [total, setTotal] = useState([]);
     const [showPerPage, setShowPerPage] = useState();
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });
    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    var arr = [];
    // useEffect(async () => {
    //     const res = fetch(`https://reqres.in/api/users`, {
    //         headers: {
    //             page: 2
    //         }
    //     })
    //     const d = await res.json()
    // }, [])
    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
          .then(res => res.json())
          .then(
            (result) => {
                setUserList1(result.data);
                setTotal(result.total)
                setShowPerPage(result.per_page);
                console.log("page1",result.data)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
          )

          fetch("https://reqres.in/api/users?page=2")
        .then(d => d.json())
          .then(
            (data) => {
               
                arr =data.data;
                console.log("page2",arr)
                setUserList(user_list1.concat(arr));
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
          )
          
      }, [])
      
    //   useEffect(() =>{
        
    //   },[])
    return (
        <>
            <div className="conatainer-fluid">  
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <table className="table">
                                            <thead>
                                                <tr className="bg-primary">
                                                    <th className="data-serial" scope="col">Id</th>
                                                    <th className="data-serial" scope="col">Name</th>
                                                    <th className="data-name" scope="col">email</th>
                                                    <th className="data-value" scope="col">Avatar</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                            {user_list?user_list.slice(pagination.start, pagination.end).map((item) => (
                                                
                                                <tr key={item.first_name}>
                                                <th className="data-serial" scope="col">{item.id}</th>
                                                    <th className="data-serial" scope="col">{item.first_name} {item.last_name}</th>
                                                    <th className="data-name" scope="col">{item.email}</th>
                                                    <th className="data-value" scope="col">{item.avatar}</th>
                                                    </tr>
                                                    )):""}
                                            </tbody>
                                        </table>
                                        <Pagination
                            showPerPage={showPerPage}
                            onPaginationChange={onPaginationChange}
                            total={total}
                        />
                                        </div>
                                        <div className="col-md-1"></div>
                                        </div>
                      
                       
                    </div>
                
        </>
    )
}


export default UserList
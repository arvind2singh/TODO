

import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
//import todo from "../images/todo.svg";
import "../App.css"



const UserList = () => {
    const [user_list, setUserList] = useState([]);
     const [total, setTotal] = useState([]);
     const [showPerPage, setShowPerPage] = useState(6);
     const [page, setPage] =useState(1)
    const [pagination, setPagination] = useState({
        start: page,
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
                arr=result.data;
                setTotal(result.total)
                setShowPerPage(result.per_page);
                setPage(result.page)
                console.log("page1",result)
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
               
                var arrr= [];
                // arrr=data.datadata.data;
                arrr=arr.concat(data.data);
                setUserList(arrr);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
          )
          
      }, [])
      console.log("page3",user_list)
      
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
                                                    <th className="data-value" scope="col"><img height="50" width="60" src={item.avatar} /></th>
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
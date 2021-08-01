import React from 'react'
import { Button } from 'antd';
import axios from 'axios';

export default function Home() {

    const ajax = () =>{
        // //取数据
        // axiso.get("http://localhost:8000/posts").then(
        //     res=>{
        //         console.log(res.data)
        //     }
        // )
        // // 增加
        console.log("value")
        axios.post("http://127.0.0.1:1430/prepare",{
            "config_path": "C:/Users/Administrator/Desktop/wby_hait_client.json",
            "user": "4920026861",
            "password": "123321",
            "exe_path": null,
            "comm_password": null,
            "kwargs": {},
            "broker": "ht_client"
          },{
            'headers':{
                'content_type': 'application/json', 
                'Content-Type': 'text/plain'
            }
          }
        ).then(
            res=>{
                console.log(res.data)
            })
        // //全改
        // axiso.put("http://localhost:8000/posts/1",
        //     {
        //         title:"123-x修改",
        //         author:"asdas"
        //     }
        // ).then(
        //     res=>{
        //         console.log(res.data)
        //     })
        // //局部修改
        // axiso.patch("http://localhost:8000/posts/1",
        //     {
        //         title:"123-x修改",
        //         author:"asdas"
        //     }
        // ).then(
        //     res=>{
        //         console.log(res.data)
        //     })
        // //
        // axiso.delete("http://localhost:8000/posts/1",
        //     {
        //             title:"123-x修改",
        //             author:"asdas"
        //         }
        //     ).then(
        //         res=>{
        //             console.log(res.data)
        //         })
            



    }
    return (
        <div>
            Home
            <Button  type="primary" onClick={ajax}>Button</Button>
        </div>
    )
}

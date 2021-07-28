import React from 'react'
import { Button } from 'antd';
// import axiso from 'axios'

export default function Home() {

    const ajax = () =>{
        // //取数据
        // axiso.get("http://localhost:8000/posts").then(
        //     res=>{
        //         console.log(res.data)
        //     }
        // )
        // //增加
        // axiso.post("http://localhost:8000/posts",
        //     {
        //         title:"123",
        //         author:"asdas"
        //     }
        // ).then(
        //     res=>{
        //         console.log(res.data)
        //     })
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

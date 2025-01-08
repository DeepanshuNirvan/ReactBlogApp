import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { useParams } from "react-router-dom";

export default function Blogs(props) {
    const [blogs,setBlogs]=useState([])
    const { category } = useParams();
    const blogCategory=category || props.category || 'all';
    useEffect(()=>{
        async function fetchBlogs(){
            const response=await fetch('http://localhost:3002/getBlogs');
            const result=await response.json();
            setBlogs(JSON.parse(result));
        }
        fetchBlogs();
        
    },[])
    
    return (
        <div className="my-5">
            <div className="w-100 d-flex justify-content-center" style={{"marginTop": "80px"}}>
                <h1>
                    Welcome To The Blogs &#128515;
                </h1>
            </div>
            <div className="container my-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        blogs.map((blog)=>{
                            if(blogCategory.toLowerCase()==="all" || blogCategory.toLowerCase()===blog.category.toLowerCase()){
                                return (< BlogItem key={blog.bid} title={blog.title} description={blog.des} imgUrl={blog.imgurl} />)
                            }
                            return <></>
                        })
                    }
                </div>
            </div>
        </div>
    )


}
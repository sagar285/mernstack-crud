import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
    const [product, setproduct] = useState([])

    useEffect(() => {
     
getproducts();
    }, [])

    const getproducts =async()=>{
        const result = await axios.get("http://localhost:3000/products");
        console.log(result.data);
           setproduct(result.data);
    }
    const Deleteproduct =async(id)=>{
      const result = await axios.delete(`http://localhost:3000/product/${id}`);
      console.log(result);
      if(result){
        getproducts();
      }
    }

    const searchhandle =async(e)=>{
       let  key= e.target.value;
        if(key){
            const result = await axios.get(`http://localhost:3000/search/${e.target.value}`)
            if(result){
             setproduct(result.data);
            }
        }
        else{
            getproducts();
        }
      
       
    }
    
  return (
    <div className='text-center mt-[50px]'>
        <input type="text" placeholder='search product' className="border-solid border-4 font-semibold border-blue-800 w-[34rem] h-[2rem] p-6" onChange={searchhandle} />
        <h3 className='font-bold text-3xl mt-[-2px] ml-[-33rem]' >Product List</h3>
        <ul className='inline-block text-center pt-3 m-0 '>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>S.no</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>Name</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>Price</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>category</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>company</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>operation</li>
        </ul>

        {
           product.length>0? product.map((item,index)=>(
                <ul className='inline-block text-center  m-0' key={item._id}>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{index+1}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.name}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.price}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.category}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.company}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'> 
                <button className='bg-red-900 font-bold text-white rounded-md  ' onClick={()=>Deleteproduct(item._id)}>Delete</button>
                <Link className="bg-green-900 font-bold  text-white rounded-md" to={"/update/"+item._id}>Update</Link>
                </li>
            </ul>
            )):<h1>no product available</h1>
        }
    </div>
  )
}

export default Product
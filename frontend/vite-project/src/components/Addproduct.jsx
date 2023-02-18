import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {

    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [company, setcompany] = useState("")
    const [error, seterror] = useState(false)
    const navigate =useNavigate();

    const addproduct =async()=>{

     if(!name || !price || !category || !company){
        seterror(true);
        return false;
     }
        const userid =JSON.parse(localStorage.getItem("user")).data._id;
        const result= await axios.post("http://localhost:3000/addproduct",{
            name:name,price:price,category:category,company:company,userid:userid
        })
        console.log(result);
        navigate("/")

    }
  return (
    <div>
      <h1 className="text-2xl font-bold ml-[27rem] mt-[3rem]">Product detail</h1>
      <div className="flex flex-col ml-[29rem] mt-[1rem] ">
      <input type="text"placeholder="enter name" className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] p-2" value={name} onChange={((e)=>{setname(e.target.value)})} />
     {error && !name&& <span className='text-red-900 font-extrabold'>Enter valid name</span>}
      <input type="text"placeholder="enter price" className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] p-2" value={price} onChange={((e)=>{setprice(e.target.value)})} />
      {error && !price&& <span className='text-red-900 font-extrabold'>Enter valid price</span>}
      <input type="text" placeholder="enter category" className="border-solid border-4 font-semibold mt-2 border-blue-800 w-[14rem] h-[2rem] p-2" value={category} onChange={((e)=>{setcategory(e.target.value)})} />
      {error && !category&& <span className='text-red-900 font-extrabold'>Enter valid category</span>}
      <input type="text"  placeholder="enter company" className="border-solid border-4 font-semibold mt-2 border-blue-800 w-[14rem] h-[2rem] p-2" value={company} onChange={((e)=>{setcompany(e.target.value)})}/>
      {error && !company&& <span className='text-red-900 font-extrabold'>Enter valid company</span>}
      <button className="bg-black rounded-md text-white font-bold w-[6rem] mt-[1rem] ml-4"onClick={addproduct}>Add Product</button>
      </div>
    </div>
  )
}

export default Addproduct
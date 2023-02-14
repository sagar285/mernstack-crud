import React,{useState,useEffect} from 'react'
import axios from "axios";

const App = () => {
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [list, setlist] = useState([])

  const postdata =async()=>{
    const result = await axios.post("http://localhost:3000/post",{name:name,age:age});
    console.log(result.data);
    setlist([...list,{_id:result.data._id,name:name,age:age}]);
  }
  const updatedata =async(id)=>{
    const newname =prompt("enter new name")
    const newage =prompt("enter new age");
    const data = await axios.put(`http://localhost:3000/update/${id}`,{name:newname,age:newage});
    console.log(data);
    setlist(list.map((val)=>{
      return val._id==id? {_id:id,name:newname,age:newage}:val
    }))
  }



  const deletedata =async(id)=>{
    const data = await axios.delete(`http://localhost:3000/delete/${id}`);
   setlist(list.filter((val)=>{
    return val._id!=id;
   }))
   

  }

  useEffect(()=>{
    const getdata =async()=>{
      const result = await axios.get("http://localhost:3000/get");
      // console.log(result.data);
      setlist(result.data);
    }
    getdata();

  },[])
 
  return (
    <div>
      <div className='bg-blue-900 p-3 h-[25vh] flex-col flex'>
        <input type="text" className='m-2 w-[12rem] ml-[21rem]' placeholder='enter name'onChange={(e)=>setname(e.target.value)} />
        <input type="number" className='m-2 w-[12rem] ml-[21rem]' placeholder='enter age' onChange={(e)=>setage(e.target.value)}/>
        <button type='submit' className='bg-black rounded-md font-bold w-[8rem] ml-[21rem] text-white ' onClick={postdata}>Submit</button>
      </div>

  {
    list.map((val)=>(
         <div className='bg-gray-900 text-white font-semibold w-[20rem] h-[4rem] ml-[20rem] mt-8 flex justify-end'>
          <h1 className='mr-2'>{val.name}</h1>
          <h2 className='mr-2'>{val.age}</h2>
         <button className='bg-black rounded-sm' onClick={()=>updatedata(val._id)}>Update</button>
         <button className='bg-yellow-300 rounded-sm ml-2' onClick={()=>deletedata(val._id)}>delete</button>

         </div>
    ))
  }

    </div>
  )
}

export default App
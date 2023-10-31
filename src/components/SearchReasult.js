import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import {fetchDataFromApi} from "../utils/Api"
import {Context} from "../context/ContextApi"
import LeftNav from "./LeftNav"
import SearchResultVideoCard from "./SearchResultVideoCard"

export default function SearchReasult({video}) {
  const [result,setResult]=useState();
  const {searchQuery}=useParams();
  const {SetLoading}=useContext(Context);
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  },[searchQuery])

  const fetchSearchResults=()=>{
    SetLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
      // con sole.log(res);
      setResult(res?.contents);
      SetLoading(false);
    })
  }
  return (
    <div className='flex felx-row h-[calc(100%-56px)]' >
      <LeftNav/>
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          {result?.map((item)=>{
            if(item.type!=="video")return false;
            let video=item?.video;
            return (
              <SearchResultVideoCard 
              key={video?.videoId}
              video={video}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

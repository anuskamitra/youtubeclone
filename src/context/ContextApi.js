import React from "react";
import {useEffect,useState,createContext } from "react";
import {fetchDataFromApi} from '../utils/Api';
export const Context=createContext(null);


export const ContextApi=(props)=>{
    const[loading,SetLoading]=useState(false);
    const[searchResults,setSearchResults]=useState("");
    const[selectedCatagories,setSelectedCatagories]=useState("New");
    const[mobileMenu,setMobileMenu]=useState("");
       
    const fetchSelectedCatagories=(query)=>{
        SetLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResults(contents);
            SetLoading(false);
        })
         console.log("hello");
    };
    useEffect(()=>{
        fetchSelectedCatagories(selectedCatagories);
    },[selectedCatagories])
  
    return(
       <Context.Provider 
       value={{
        loading,
        SetLoading,
        searchResults,
        setSearchResults,
        selectedCatagories,
        setSelectedCatagories,
        mobileMenu,
        setMobileMenu
       }}
       >
        {props.children}
       </Context.Provider>
    )

}

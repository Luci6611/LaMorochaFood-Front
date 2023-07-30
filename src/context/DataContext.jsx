import React, { createContext, useState } from 'react'

export const DataContext = createContext();



const DataProvider = ({children}) => {
    
  // Estado global

  const [edit, setEdit] = useState(false); 
  const [creado, setCreado] = useState(false); 
  const [menusEditados, setMenusEditados] = useState([]);

  return (
    <DataContext.Provider value={{ edit, setEdit, menusEditados, setMenusEditados, creado, setCreado}}>{children}</DataContext.Provider>
  )
}

export default DataProvider
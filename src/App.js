import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import { router } from './Router/Route';
export const UserContext =createContext();
export const LoadingContext=createContext();
function App() {
  const [user,setUser]=useState({})
  const [loading,setLoading]=useState(true);  
  return (
    
    <UserContext.Provider value={[user,setUser]}>      
        <LoadingContext.Provider value={[loading,setLoading]}>
          <div className="App">
            <RouterProvider router={router}>
              <Main></Main>
            </RouterProvider>
          </div>
        </LoadingContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;

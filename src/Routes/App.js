import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Container/Home";
import Layout from "../Components/Layout";
import "bootswatch/dist/quartz/bootstrap.min.css"
import Login from "../Components/Login";
import Registro from "../Components/Registro";
import AuthContext from "../Context/AuthContext";
import ProtetecRoute from "../Components/ProtetecRoute";
import FirestoreContext from "../Context/FirestoreContext";
export default function App(){
  
  return(
    <>
      <BrowserRouter>
          <AuthContext>
            <Routes>
              <Route exact path="Login" element={<Login/>}></Route>
                <Route exact path="/" element={<Layout><ProtetecRoute><FirestoreContext><Home /></FirestoreContext></ProtetecRoute></Layout>}></Route>
                <Route exact path="*" element={<Layout><ProtetecRoute><FirestoreContext><Home /></FirestoreContext></ProtetecRoute></Layout>}></Route>                
                <Route exact path="Registro" element={<Registro/>}></Route>
            </Routes>
          </AuthContext>
      </BrowserRouter>
    </>
  )

}

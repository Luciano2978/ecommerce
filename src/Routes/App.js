import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Container/Home";
import Layout from "../Components/Layout";
import "bootswatch/dist/quartz/bootstrap.min.css"
export default function App(){
  
  return(
    <>
      <BrowserRouter>
          <Layout>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
              </Routes>
          </Layout>
      </BrowserRouter>
    </>
  )

}

import ContextoFirestore from "./Contexto";
import { addDoc, collection, doc, }  from "firebase/firestore";
import { fs } from "../Services/Firebase";
import {useContext } from "react";
import Contexto from "./Contexto";

export default function FirestoreContext(props){

    const { children } = props;


    const regUserWithAdd = async (nombreCompleto,email,numeroTel,fotoPerfil,estado) => {
        await addDoc(collection(fs,"usuario"),{
            NombreCompleto: nombreCompleto,
            Email: email,
            Phone: numeroTel,
            Photo: fotoPerfil,
            Conectado: estado
        });
    }

    return(
        <>
            <ContextoFirestore.Provider value={{
                
        
            }}>
                {children}
            </ContextoFirestore.Provider>
            


        
        </>
    )

}
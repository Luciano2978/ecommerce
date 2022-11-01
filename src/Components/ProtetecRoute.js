import { useContext,useEffect } from "react";
import Contexto from "../Context/Contexto";
import { Navigate, useParams } from "react-router-dom";

export default function ProtetecRoute(props){

    const { children } = props;
    const { actualizarEstado,user,regUserDatos  } = useContext(Contexto);
    //Cambiar al firestoreContext
    console.log("hola")
    
    if (user){
        const estado = true;
        const email = user.email;
        const nombre = user.displayName;
        const numeroTel = user.phoneNumber;
        const fotoPerfil = user.photoURL;
        regUserDatos(nombre,email,numeroTel,fotoPerfil,estado)
    }
    

    return(
        <>
            {children}

        </>
    )
}
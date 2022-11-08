

export default function Soporte(){




    return(
        <>
            <div className="card mx-auto" style={{width: "40rem", height: "30rem"}}>
                <div className="card-body">
                    <h5 className="card-title text-center">¡Bienvenido al Soporte!</h5>
                    <div className="card mx-auto border border-dark bg-dark" style={{width: "35rem", height: "25rem"}}>
                        <div className="card-body">
                            <input type="text" className="fixed-bottom rounded"  placeholder="Escriba su mensaje Aqui..." style={{width: "30rem"}}></input>
                            <button  className="position-absolute bottom-0 end-0" style={{width: "4rem"}}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>    
        
        </>
    )
}
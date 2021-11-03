export default function TrakingWizard(props) {
    return (
        <div className="tracking">
            <div className={props.step1? "active" : "" }><span>1</span>Confirmado  </div>
            <div className={props.step2? "active" : "" }><span>2</span> En Ensamble</div>
            <div className={props.step3? "active" : "" }><span>3</span> Configuracion de Software</div>
            <div className={props.step4? "active" : "" }><span>4</span> Pruebas de Estres</div>
            <div className={props.step5? "active" : "" }><span>5</span> Enviado</div>
            <div className={props.step6? "active" : "" }><span>6</span> Entregado</div>
        </div>
    )
}

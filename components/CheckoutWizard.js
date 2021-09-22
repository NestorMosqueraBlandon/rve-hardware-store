export default function CheckoutWizard({activeStep = 0}) {
    return (
        <div className="steper" activeStep={activeStep} alternativeLabel>
            {
                ['Inicio Sesion', 'Direccion de Envio', 'Metodo de Pago', 'Realizar Pedido' ].map((step) => (
                    <div className="step" key={step}>
                        <div className="stepLabel">{step}</div>
                    </div>
                ))
            }
        </div>
    )
}


export default function DivisaFormater({value}) {

    const formaterMoney = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return (
        <div>
            <span>{formaterMoney.format(value)}</span>
        </div>
    )
}
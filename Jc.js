const tarifas = [
    { acueducto: 2.29, alcantarillado: 0.10 },
    { acueducto: 0.210, alcantarillado: 0.10 },
    { acueducto: 0.370, alcantarillado: 1.80 },
    { acueducto: 0.640, alcantarillado: 3.00 },
    { acueducto: 1.400, alcantarillado: 7.50 },
    { acueducto: 2.930, alcantarillado: 7.50 },
    { acueducto: 3.662, alcantarillado: 10.00 },
    { acueducto: 3.900, alcantarillado: 20.00 }
];

const calcularFactura = () => {
    let consumo = parseFloat(document.getElementById('consumo').value);
    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, ingrese un consumo válido.");
        return;
    }

    let costoAcueducto = 0;
    let costoAlcantarillado = 0;
    let index = 0;
    let limiteConsumo = 10; // Inicialzamos

    while (consumo > 0 && index < tarifas.length) {
        const tarifa = tarifas[index];
        const consumoEnEsteRango = consumo > limiteConsumo ? limiteConsumo : consumo;

        // Calcular el costo
        costoAcueducto += consumoEnEsteRango * tarifa.acueducto;
        costoAlcantarillado = tarifa.alcantarillado;

        // Resta del consumo
        consumo -= consumoEnEsteRango;
        limiteConsumo = index < 6 ? 10 : Infinity; // Cambia el límite a infinito para el último índice
        index++;
    }

    const total = costoAcueducto + costoAlcantarillado;

    document.getElementById('detalle').innerText = `Costo del Acueducto: $${costoAcueducto.toFixed(2)}\nCosto del Alcantarillado: $${costoAlcantarillado.toFixed(2)}`;
    document.getElementById('total').innerText = `Total a Pagar: $${total.toFixed(2)}`;
};

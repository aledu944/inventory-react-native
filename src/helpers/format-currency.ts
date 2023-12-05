export const formatCurrency = ( numero: number ) => {
    // Formatear el número con separadores de miles y decimales
    const numeroFormateado = numero.toLocaleString('es-BO', {
        style: 'currency',
        currency: 'BOB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return numeroFormateado;
}
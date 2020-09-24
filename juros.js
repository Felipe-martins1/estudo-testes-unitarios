const getJurosSimples = (c, i, t) => {
    return c * i * t
}

const getMontanteSimples = ({ getJurosSimples }) => (c, i, t) => c + getJurosSimples(c, i, t)

const getMontanteJurosCompostos = (c, i, t) => c * (1 + i) ** t

const getJurosCompostos = ({ getMontanteJurosCompostos }) => (c, i, t) => getMontanteJurosCompostos(c, i, t) - c

module.exports = {
    getMontanteJurosCompostos,
    getJurosSimples,
    getMontanteSimples: getMontanteSimples({ getJurosSimples }),
    getJurosCompostos: getJurosCompostos({ getMontanteJurosCompostos }),
    pure: {
        getMontanteSimples,
        getJurosCompostos
    }

}
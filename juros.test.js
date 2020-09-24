
const juros = require('./juros')

test('getJurosSimples', () => {
    const c = 100
    const i = 0.10
    const t = 1
    const jurosEsperado = 10
    const jurosCalculado = juros.getJurosSimples(c, i, t)
    expect(jurosCalculado).toBe(jurosEsperado)
})

test('getMontanteSimples', () => {
    const c = 100
    const i = 0.10
    const t = 1
    const montanteEsperado = 110

    const getJurosSimples = jest.fn()
    getJurosSimples.mockImplementation(() => 10)
    const getMontanteSimples = juros.pure.getMontanteSimples({ getJurosSimples })
    const montante = getMontanteSimples(c, i, t)
    getMontanteSimples(c, i, t)

    expect(getJurosSimples.mock.calls[0]).toEqual([c, i, t])
    expect(montante).toBe(montanteEsperado)
})

test('getMontanteJurosComposto', () => {
    const c = 1000
    const i = 0.10
    const t = 1
    const montanteEsperado = 1100
    const montanteCalculado = juros.getMontanteJurosCompostos(c, i, t)
    expect(montanteCalculado).toBe(montanteEsperado)
})

test('JurosCompostos', () => {
    const c = 1000
    const i = 0.10
    const t = 1
    const getMontanteJurosCompostos = jest.fn()

    getMontanteJurosCompostos.mockImplementation(() => 1100)

    const jurosCompostos = juros.pure.getJurosCompostos({ getMontanteJurosCompostos })
    const jurosCalculado = jurosCompostos(c, i, t)

    expect(getMontanteJurosCompostos.mock.calls[0]).toEqual([c, i, t])
    expect(jurosCalculado).toBe(100)
})


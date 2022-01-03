module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('rota GET para atendimentos.')
    })

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na roda de atendimentos e está realizando um POST.')
    })
}
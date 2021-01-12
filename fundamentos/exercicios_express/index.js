// BACKEND

const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')

const UsuarioApi = require('./api/usuario')
require('./api/produto')(app, 'parametros')

app.post('/usuario', UsuarioApi.salvar)
app.get('/usuario', UsuarioApi.obter)



app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(saudacao('Guilherme'))

app.get('/opa', (req, res, next) => {   //função midleware
     //res.send('Estou <b>bem<b>!')
     
     /*res.json({
          name: 'Ipad 32Gb',
          price: 1899,
          dicsount: 0.12
     })*/

     /*res.json([
          {id: 7, nome: 'Ana', position: 1},
          {id: 34, name: 'Carlos', position: 2},
          {id: 73, name: 'Bia' , position:3}
     ])*/

     res.json({
          data: [
               {id: 7, nome: 'Ana', position: 1},
               {id: 34, name: 'Carlos', position: 2},
               {id: 73, name: 'Bia' , position:3} 
          ],
          count: 30,
          skip: 0,
          limit: 3,
          status: 200
     })
     next()    //indica que ja pode ir para o proximo item da mesma URL
})

app.get('/cliente/relatorio', (req,res) => {
     res.send(`Cliente relatoio: completo = ${req.query.completo} do ano = ${req.query.ano}`)
})

app.post('/corpo', (req,res) => {
     /* //sem o bodyparser
     let corpo = ''
     req.on('data', function(parte){
          corpo += parte
     })

     req.on('end', function(){
          res.send(corpo)
     })*/

     // com bodyparser
     /*res.send(req.body)  */
     res.send(req.body.nome)
})

app.get('/cliente/:id' , (req,res) => {
     res.send(`Cliente ${req.params.id} selecionado`)
})

app.use('/opa', (req,res) => {
     console.log('Será que serei chamado?')
})

app.listen(3001, () => {
     console.log('Backend executando ...')
})

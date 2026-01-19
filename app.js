const express = require('express')
const fetch = require('node-fetch')

const sequelize = require('./database')
const Affirmation = require('./models/affirmation')


const app = express()
const port = 8888

app.get('/affirmation/en', async (req, res) => {
  const response = await fetch('https://www.affirmations.dev/', {
    method: 'GET',
  })
  const data = await response.json()
  res.json(data)
})

app.get('/', async (req, res) => {
  res.json({
    success:
      "Le serveur est bien démarré. Tente d'accéder à la route /affirmation/fr ou /affirmation/en",
  })
})

app.get('/affirmation/fr', async (req, res) => {
  const affirmations = await Affirmation.findAll({
    where: { language: 'fr' },
  })

  const index = Math.floor(Math.random() * affirmations.length)

  res.json({ affirmation: affirmations[index].text })
})


// app.get('/affirmation/fr', async (req, res) => {
//   // Le contenu de la variable affirmations_fr sera à remplacer par une interaction avec une base de données dans l'étape 2 !
//   const affirmations_fr = [
//     'Je me fais confiance',
//     "J'écoute mes intuitions",
//     'Les obstacles sont mes opportunités pour progresser',
//     'Ma santé mentale et physique sont prioritaires',
//     "J'écoute les signaux de mon corps",
//     "J'apprends tous les jours de moi-même",
//     'Je me dirige toujours vers la bonne direction',
//     "J'ai droit au bonheur",
//     'Je suis bienveillant·e envers moi-même',
//     "J'avance un pas après l'autre",
//     "Ma paix intérieure irradie à l'extérieur",
//     'Je célèbre chaque petit pas vers mes objectifs comme une victoire',
//     'Je trouve du bonheur dans les plaisirs simples de la vie',
//     "Je suis ouvert·e à recevoir toutes les formes d'abondance qui m'entourent",
//     "Je mérite d'avoir une vie financière abondante",
//     'Je suis reconnaissant·e pour chaque aspect positif de ma vie',
//     'Les défis me rendent plus fort·e, et je les affronte avec détermination',
//     "Chaque jour, je découvre de nouvelles raisons de m'aimer davantage",
//     'Mon potentiel est immense et je vais atteindre mes aspirations',
//     "Je crée ma réalité avec des pensées optimistes et pleines d'espoir",
//   ]
//   // Generate a random integer
//   const index = Math.ceil(Math.random() * (affirmations_fr.length - 1))
//   res.json({ affirmation: affirmations_fr[index] })
// })

app.all('*', (req, res) => {
  res
    .status(404)
    .send(
      '<h1>404! Page not found</h1> <br /> The only routes availables are: <ul><li>/affirmation/fr/</li><li>/affirmation/en/</li></ul>'
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./controllers')
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express()
const PORT = process.env.PORT || 3001

const hbs = exphbs.create({ helpers })

const sess = {
    secret: "I don't know what else to put here :)",
    cookie: {
        maxAge: 600000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: true,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening! 🚀'))
})
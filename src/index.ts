import app from './app'

app.listen(process.env.PORT || 8081, () =>
    console.log('listening on: http://localhost:8081'),
)

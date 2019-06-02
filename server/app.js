const express = require('express');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.set('port', process.env.PORT || 8000);

app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routers/auth'));
app.use(require('./routers/user'));
app.use(require('./routers/appointment'));
app.use(require('./routers/hospital'));

app.listen(app.get('port'), () => {
	console.log(`Server rodando na porta: ${app.get('port')}`);
});

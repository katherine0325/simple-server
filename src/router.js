const Router = require('koa-router');
const router = new Router();
const { Res } = require('./lib/common');
const index = require('./controller/index');
const user = require('./controller/user');
const example = require('./controller/example');

router.get('/', Res(index.index));

router.post('/api/user/login', Res(user.login));

router.get('/api/example/example', Res(example.getList));

module.exports = router;

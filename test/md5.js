const Koa = require('koa');
const app = new Koa();
const crypto = require('../');

const secret = '!,78.abc';
app.use((ctx, next) => {
    md5Str = crypto.md5('china');
    ctx.body = md5Str;
});

app.listen(3002);

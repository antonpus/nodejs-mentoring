import jwt from 'jsonwebtoken';
import config from '../../config/appconfig';

const sign = user => jwt.sign({sub: user.email}, config.auth.secret);

const verify = (token, done, failed) => jwt.verify(token, config.auth.secret, err => {
    if (err) {
        failed();
        return;
    }
    done();
});

export default {sign, verify};
import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as passportJwt from 'passport-jwt';
import db from '../db';
import config from '../config';
import { comparePasswords } from '../utils/passwords';
import type { IPayload } from '../utils/types';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const [user] = await db.users.find('email', email);
        if (user && comparePasswords(password, user.password)) {
            delete user.password;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        console.log(error);
        done(error);
    }
}));

passport.use(new passportJwt.Strategy({
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret
}, async (payload: IPayload, done) => {
    try {
        const [user] = await db.users.one(payload.userid);
        if (user) {
            delete user.password;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        console.log(error);
        done(error);
    }
}));
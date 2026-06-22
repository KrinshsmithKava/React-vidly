import http from './httpService';
import config from '../config.json';
import RegisterForm from './../components/registerForm';

const apiEndpoint = config.apiUrl + '/users';

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    });
}
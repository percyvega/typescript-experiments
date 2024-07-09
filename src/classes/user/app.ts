import {User} from './User'

let user: User = new User(
    'Percy',
    'Vega',
    'percy@vega.com'
)

console.log(user.fullName);
console.log(`Email matches? ${user.matchesEmail("percy@vega.com")}`);

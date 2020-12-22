export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token')

    if (token) {
        return { 'Authorization': 'pdam ' + user.token };
    }else{
    	return {}
    }

    // if (user && user.token) {
        // return { 'Authorization': 'Bearer ' + user.token };
    // } else {
    //     return {};
    // }
}
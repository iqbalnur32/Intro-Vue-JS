/*export function JwtToken(){
	const headers = localStorage.getItem('token')
    const split = headers.split('.')
    const split2 = split[1]
    const base64 = atob(split2)
    const json = JSON.parse(base64)

    return json
}*/

let JwtToken = 'AIzaSyDzvFqUObtkQjtrHJ4MgmkJPb0N0S6kauM'
export default JwtToken
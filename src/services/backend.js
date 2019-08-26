const API = "https://travapp-api99.herokuapp.com"


export function getAuthToken(loginInfo) {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInfo)
  }).then(res => console.log(res))
}


export function newUser(username, password) {
  return fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(res => res.json())
}

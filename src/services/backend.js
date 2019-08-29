const API = "http://localhost:3000/"


export function getAuthToken(loginInfo) {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInfo)
  }).then(res => res.json())
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

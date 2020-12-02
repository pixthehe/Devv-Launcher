// String, Numbers, Boolean, null, undefined, Symbol

// Arrays - variables that hold multiple vaules

/*
 multi line comment
*/



const logins = [
    {
    username: 'admin',
            password: 'root12'
        },
        {
            username: 'devinl',
            password: 'devinsteam'
    },
    {
    username: 'kid',
    password: '12345'
    }
]

function login() {
var username = document.getElementById("username").value
var password = document.getElementById("password").value

for(i = 0; i < logins.length; i++) {
if(username == logins[i].username && password == logins[i].password) { console.log("Welcome " + username +  "d");  return} 
}
console.log("no")
}



/*   <label>UserName:</label>
  <input type="text" name="UserName" value="Username">
  </div>
  
  <div>
    <label>Password:</label>
    <input type="password" name="Password" value="....">
    </div>
    <div>
  
      <labe></label>
      <input type="submit" name="submit" value="Submit">
      </div> */
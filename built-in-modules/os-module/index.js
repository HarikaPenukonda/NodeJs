const os = require("os")

// info about current user
const user = os.userInfo()
//console.log(user)

// {
//   uid: 501,
//   gid: 20,
//   username: 'matthewhinthorn',
//   homedir: '/Users/matthewhinthorn',
//   shell: '/bin/zsh'
// }

// method returns the system uptime in seconds
//console.log(`The system uptime is ${os.uptime()} seconds`) // The system uptime is 158790 seconds

const currentOS = {
    name : os.type(),
    relase : os.release(),
    totalMem : os.freemem()
}

console.log(currentOS) // { name: 'Darwin', relase: '22.5.0', totalMem: 66977792 }


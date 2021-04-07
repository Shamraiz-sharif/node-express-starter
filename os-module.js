const os = require('os')
 
//getting the user information
const user = os.userInfo()
console.log(user);

// gettting the system uptime
console.log(`System uptime is ${os.uptime()} seconds`);

// object
const currentOS = {

    name: os.type(),
    release: os.release(),
    versionOS: os.version(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);
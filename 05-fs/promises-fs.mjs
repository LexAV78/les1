import fs from 'fs/promises'
console.log('Start')

fs.writeFile('./first.txt','File firts')
.then(()=>console.log('promise writeFile'))
.then(()=>fs.appendFile('./first.txt','\nnext Str'))
.then(()=>console.log('promise append Text'))
.then(()=>fs.rename('./first.txt','./rename-first.txt'))
.then(()=>console.log('promise rename first.txt'))
.catch((err)=>console.log(err))



console.log('End')
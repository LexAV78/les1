import fs from 'fs'
console.log('Start')

try{
fs.writeFileSync('./first.txt','File firts')
console.log('Sync writeFile')
fs.appendFileSync('./first.txt','\nnext Str')
console.log('Sync append Text')
fs.renameSync('./first.txt','./rename-first.txt')
console.log('Sync rename first.txt')
}catch(err){
    console.log(err)
}






console.log('End')
import fs from 'fs'
console.log('Start')
fs.writeFile('./first.txt','File firts',(err)=>{
    if(err)console.log(err)
        else{
        console.log('writeFile')
        fs.appendFile('./first.txt','\nnext Str',(err)=>{
            if(err)console.log(err)
                else
                {
                console.log('append Text')
                fs.rename('./first.txt','./rename-first.txt',(err)=>{
                    if(err)console.log(err)
                    else
                    console.log('rename first.txt')
                })
                }
        })    
    }
})

console.log('End')
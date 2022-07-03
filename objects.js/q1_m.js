let d1={'a': 100, 'b': 200, 'c':300}
let d2={'a': 300, 'b': 200, 'd':400}
let d3={}
for (let i in d1){
    for(let j in d2){
        if (i=j){
            d3[i]=d1[i]+d2[j]
            
        }
    }
}
console.log(d3)
let name = 'ABCD';
let branch = 'NHCF';
for(let i=0; i<name.length; i++){
  for(let j=0; j<branch.length; j++){
    if(name[i] === branch[j]){
      console.log(name[i]);
    }
  }
}

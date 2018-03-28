interface EmpDetails{
    fname : string,
    lname : string,
    level : number,
    doIt()
}

let empDetails=(detail:EmpDetails)=>{
 console.log(detail.doIt()+detail.fname);
}

empDetails({
 fname : 'Sayani',
 lname : 'Ghosh',
 level : 11,
 doIt(){
  console.log('Hi');
 }
})
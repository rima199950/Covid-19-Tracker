fetch('https://api.covidtracking.json')
.then(res=>{
    return res.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("sorry");
})

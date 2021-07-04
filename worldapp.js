fetch('https://corona.lmao.ninja/v2/all')
.then(res=>{
    return res.json();
})
.then(data=>{
    var wtotal = data['cases'];
    var wactive = data['active'];
    var wreco = data['recovered'];
    var wdeath = data['deaths'];
    var affected_country= data['affectedCountries'];
    var today_cases = data['todayCases'];
    var today_reco = data['todayRecovered'];
    var today_death = data['todayDeaths'];
    document.getElementById("w_total").innerHTML+=wtotal;
    document.getElementById("w_active").innerHTML+=wactive;
    document.getElementById("w_reco").innerHTML+=wreco;
    document.getElementById("w_death").innerHTML+=wdeath;
    document.getElementById("w_acountry").innerHTML+=affected_country;
    document.getElementById("wtd_cases").innerHTML=today_cases;
    document.getElementById("wtd_reco").innerHTML=today_reco;
    document.getElementById("wtd_death").innerHTML=today_death;
  
    
    var yValues =[wreco,wactive,wdeath];
    var xValues = ["Recovered","Active","Dead"];
    var barColors = ["green","blue","red"];
    new Chart("myChart1", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
                
    });

})
.catch(error=>{
    console.log("sorry");
})


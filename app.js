const t1= document.getElementById("t1");

fetch('https://api.covid19india.org/data.json')
.then(res=>{
    return res.json();
})
.then(data=>{
    for(let i=0;i<38;i++) {
        
        if(i==0) {
            var to=(data['statewise'][0]['confirmed']);
            var todayto=(data['statewise'][0]['deltaconfirmed']);
            var ac = (data['statewise'][0]['active']);
            var re=(data['statewise'][0]['recovered']);
            var todayre = (data['statewise'][0]['deltarecovered']);
            var de= (data['statewise'][0]['deaths']);
            var todayde = (data['statewise'][0]['deltadeaths']);


            var yValues =[re,ac,de];
            var xValues = ["Recovered","Active","Dead"];
            var barColors = ["green","blue","red"];
            new Chart("myChart", {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                
            });
            document.getElementById("t").innerHTML=to;
            document.getElementById("todaytotal").innerHTML="+"+todayto;
            document.getElementById("a").innerHTML=ac;
            document.getElementById("r").innerHTML=re;
            document.getElementById("todayrecovered").innerHTML="+"+todayre;
            document.getElementById("d").innerHTML=de;
            document.getElementById("todaydeaths").innerHTML="+"+todayde;
            
        }
        
            var state=(data['statewise'][i+1]['state']);
            var cases=(data['statewise'][i+1]['confirmed']);
            var tcases=(data['statewise'][i+1]['deltaconfirmed']);
            var active=(data['statewise'][i+1]['active']);
            var recover = (data['statewise'][i+1]['recovered']);
            var trecover = (data['statewise'][i+1]['deltarecovered']);
            var death=(data['statewise'][i+1]['deaths']);
            var todeath=(data['statewise'][i+1]['deltadeaths']);
            
            var row = t1.insertRow(i+1);
            row.className="bdy";
            var cell1= row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = state;
            cell2.innerHTML = cases+"<br>"+"<span>+"+tcases+"</span>";
            cell3.innerHTML = active;
            cell4.innerHTML = recover+"<br>"+"<span>+"+trecover+"</span>";
            cell5.innerHTML =death+"<br>"+"<span>+"+todeath+"</span>";
            
    }
    
    
    
    
})
.catch(error=>{
    console.log("sorry");
})




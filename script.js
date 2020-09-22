var btn=document.getElementById("searchBtn");
        
        btn.addEventListener('click',function(){
            var searchValue=document.getElementById("inputField").value;
            if(searchValue==""){
                alert("Enter Specific Country")
            }else{
                console.log(searchValue);
                fetch(`https://corona.lmao.ninja/v2/countries/${searchValue}`)
                .then(response => response.json())
                .then(data => load(data))
                .catch((error)=> alert("Not Found"))
            }
            
        })


        function load(data){
            console.log(data);
            if(data.todayCases==undefined){
                console.log("Not Found");
                alert("Enter a Valid Country Name");

            }else{
                document.getElementById("new-case").innerText=data.todayCases+"🛌";
                document.getElementById("new-death").innerText=data.todayDeaths+"⚰️";
                document.getElementById("critical").innerText=data.critical+"🚑";
                document.getElementById("total-case").innerText=data.cases+"🛌";
                document.getElementById("total-death").innerText=data.deaths+"⚰️";
                document.getElementById("total-recovered").innerText=data.recovered+"🌻";
                document.getElementById("population").innerText=data.population+"👨‍👨‍👦‍👦";
                document.getElementById("critical-one-million").innerText=data.criticalPerOneMillion+"🚑";
                document.getElementById("death-one-million").innerText=data.deathsPerOneMillion+"⚰️";
                document.getElementById("recover-one-million").innerText=data.recoveredPerOneMillion+"🌻";


                document.getElementById("country").innerText=data.country;
                document.getElementById("result").style.display="block";
                var imgURL=data.countryInfo.flag;
                document.getElementById("flag").setAttribute("src", imgURL);     
            }
            
        }
        

        // Time Show
        function getDateTime() {
            var now     = new Date(); 
            var year    = now.getFullYear();
            var month   = now.getMonth()+1; 
            var day     = now.getDate();
            var hour    = now.getHours();
            var minute  = now.getMinutes();
            var second  = now.getSeconds(); 

            var AmOrPm = hour >= 12 ? 'pm' : 'am';
            hour = (hour % 12) || 12;

            if(month.toString().length == 1) {
                month = '0'+month;
            }
            if(day.toString().length == 1) {
                day = '0'+day;
            }   
            if(hour.toString().length == 1) {
                hour = '0'+hour;
            }
            if(minute.toString().length == 1) {
                minute = '0'+minute;
            }
            if(second.toString().length == 1) {
                second = '0'+second;
            }
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            const d = new Date();
            var months=monthNames[d.getMonth()];

            var dateOnly=months+" "+day+", "+year;
            var timeOnly=hour+":"+minute+":"+second+" "+AmOrPm;
            getTime(timeOnly);
            return dateOnly;
    }

    // example usage: realtime clock
    setInterval(function(){
        currentTime = getDateTime();
        console.log(currentTime);
        document.getElementById("time").innerText=currentTime;
    }, 1000);

    function getTime(value){
                document.getElementById("watch").innerText=value;
        }
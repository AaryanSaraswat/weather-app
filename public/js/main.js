const cityName = document.getElementById('cityName');
const submit_btn = document.getElementById('submit_btn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');




const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal==="") {
        city_name.innerText = 'Please write the name before your search';
        datahide.classList.add('data_hide');
   }
   else{
    try{
        let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=af7d71577ff7a267ae4623fc1083605f`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const arrData = [data]
        
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        //condition to check sunny or cloudy
        if (tempMood == "Clear") {
            temp_status.innerHTML = 
                "<i class='fa fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
            temp_status.innerHTML = 
            "<i class='fa fa-cloud' style='color: #ffffff;'></i>";
        } else if (tempMood == "Rain") {
            temp_status.innerHTML =
            "<i class='fa fa-cloud-rain' style='color: #a4bobe;'></i>";
        }
        else if (tempMood == "Haze") {
            temp_status.innerHTML = 
            "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
        }

        else if (tempMood == "Patrtly Cloudy") {
            temp_status.innerHTML =
            "<i class='fa fa-cloud-rain' style='color: #a4bobe;'></i>";
        }
        else{
            temp_status.innerHTML =
            "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
        }

        datahide.classList.remove('data_hide');
        cityVal=""; 

        datahide.classList.remove('data_hide');
    }
    catch{
        city_name.innerText = 'Please eneter the city name propeerly';
        datahide.classList.add('data_hide');
    }
   
    
   }
}

submit_btn.addEventListener('click', getInfo);
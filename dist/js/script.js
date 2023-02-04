"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ! for responsive navbar
const menu_open_btn = document.getElementById('menu_open_btn');
const menu_close_btn = document.getElementById('menu_close_btn');
const navbar = document.getElementById('navbar');
menu_open_btn.addEventListener('click', () => {
    navbar.style.display = 'flex';
});
menu_close_btn.addEventListener('click', () => {
    navbar.style.display = 'none';
});
// ! for weather page
const search_btn = document.getElementById('search_btn');
const city_name = document.getElementById('city_name');
const data_box = document.getElementById('data_box');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const country = document.getElementById('country');
const currdate = document.getElementById('currdate');
const show_Data = (t, c, d) => {
    city.textContent = c;
    temp.textContent = t;
    country.textContent = d;
    const time = new Date();
    currdate.textContent = `${time.toLocaleTimeString()} on ${time.toLocaleDateString()}`;
    data_box.classList.remove('data_hide');
};
const getInfo = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    let city_name_val = city_name.value;
    if (city_name_val === '') {
        alert('Enter Correct Value');
    }
    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name_val}&units=metric&appid=8a9cffa1507f6a96d8f62c9781ae096f`;
            const res = yield fetch(url);
            const data = yield res.json();
            let tempreture = data.main.temp;
            let city = data.name;
            let country = data.sys.country;
            show_Data(tempreture, city, country);
        }
        catch (error) {
            if (error == "TypeError: Cannot read properties of undefined (reading 'temp')") {
                alert('Sorry.. Your Entered City Not Found!');
            }
            else {
                alert(error);
            }
        }
    }
});
// ! Everything starts from here 
search_btn.addEventListener('click', (e) => { getInfo(e); });

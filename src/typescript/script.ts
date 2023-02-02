// ! for responsive navbar
const menu_open_btn: HTMLElement = document.getElementById('menu_open_btn')!;
const menu_close_btn: HTMLElement = document.getElementById('menu_close_btn')!;
const navbar: HTMLElement = document.getElementById('navbar')!;

menu_open_btn.addEventListener('click', () => {
    navbar.style.display = 'flex';
})
menu_close_btn.addEventListener('click', () => {
    navbar.style.display = 'none';
})

// ! for weather page
const search_btn = document.getElementById('search_btn')! as HTMLButtonElement;
const city_name = document.getElementById('city_name')! as HTMLInputElement;
const data_box = document.getElementById('data_box')! as HTMLDivElement;
const city = document.getElementById('city')! as HTMLHeadingElement;
const temp = document.getElementById('temp')! as HTMLHeadingElement;
const country = document.getElementById('country')! as HTMLHeadingElement;
const currdate = document.getElementById('currdate')! as HTMLSpanElement;

const show_Data = (t: string, c: string, d: string) => {
    city.textContent = c;
    temp.textContent = t;
    country.textContent = d;
    const time = new Date();
    currdate.textContent = `${time.toLocaleTimeString()} on ${time.toLocaleDateString()}`;
    data_box.classList.remove('data_hide');
}

const getInfo = async (e: Event) => {
    e.preventDefault();
    let city_name_val = city_name.value;

    if (city_name_val === '') {
        alert('Enter Correct Value');
    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name_val}&units=metric&appid=8a9cffa1507f6a96d8f62c9781ae096f`;
            const res = await fetch(url);
            const data = await res.json();

            let tempreture = data.main.temp as string;
            let city = data.name as string;
            let country = data.sys.country as string;
            
            show_Data(tempreture, city, country);
        } catch (error) {
            if (error == "TypeError: Cannot read properties of undefined (reading 'temp')") {
                alert('Sorry.. Your Entered City Not Found!');
            }
            else {
                alert(error);
            }
        }
    }
}

search_btn.addEventListener('click', (e) => { getInfo(e); });
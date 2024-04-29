const menubtn = document.querySelector('#menubtn');
const mobile = document.querySelector('#mobile');

menubtn.addEventListener('click', () => {
    if (mobile.classList.contains('hidden')) {
        mobile.classList.remove("hidden");
        menubtn.innerHTML =`<i class="ri-xrp-fill"></i>`
    } else {
        mobile.classList.add("hidden");
        menubtn.innerHTML =`<i class="ri-menu-3-line"></i> Menu`
    }
});

const timebox = document.querySelector('#time')

setInterval(() => {
    let currentDate = new Date()
    const indianTime = currentDate.toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
    timebox.innerHTML = `${indianTime}`
}, 1000);

// this script to add the version
const version = document.querySelector("#version").innerHTML = `V0.1`

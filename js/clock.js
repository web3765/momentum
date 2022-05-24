const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

// 켜자마자 시간 나오게 하기 위해 먼저 호출 | 호출 안 하면 1초 동안 시간 안 나옴
getClock();
// 60초 단위로 호출
setInterval(getClock, 6000);
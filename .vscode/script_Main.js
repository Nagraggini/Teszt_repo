

/*Kötelező sor, hogy betöltse az oldal a js kódot.*/
document.addEventListener('DOMContentLoaded', () => {

    const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    function updateTime() {
        const now = new Date();
    
        // Frissítsd az időt
        document.getElementById("time").innerText = 
            zeroPadding(now.getHours(), 2) + ":" +
            zeroPadding(now.getMinutes(), 2) + ":" +
            zeroPadding(now.getSeconds(), 2);
    
        // Frissítsd a dátumot
        document.getElementById("date").innerText = 
            now.getFullYear() + "-" +
            zeroPadding(now.getMonth() + 1, 2) + "-" +
            zeroPadding(now.getDate(), 2) + " " +
            WEEK[now.getDay()];
    }
    
    // Segédfüggvény a nullák hozzáadásához
    function zeroPadding(num, digit) {
        return String(num).padStart(digit, '0');
    }
    
    // Első frissítés és időzítő
    updateTime();
    setInterval(updateTime, 1000);
});
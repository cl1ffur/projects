const clockFace = document.getElementById('clockFace'); // Циферблат часов
const hourHand = document.getElementById("hourHand");   // Часовая стрелка
const minuteHand = document.getElementById("minuteHand"); // Минутная стрелка
const secondHand = document.getElementById("secondHand"); // Секундная стрелка

// Создаем метки для каждой минуты на циферблате (всего 60 штук)
for (let i = 0; i < 60; i++) {
    const marker = document.createElement('div');  
    marker.classList.add('minute-marker');     
    marker.style.transform = `rotate(${i * 6}deg)`; // Устанавливаем поворот метки на основе ее позиции (каждая метка поворачивается на 6 градусов)
    clockFace.appendChild(marker);                  // Добавляем метку на циферблат

    // Каждые 5 минут делаем метку больше (маркер часа)
    if (i % 5 === 0) {
        marker.classList.add('hour-marker');  
    }

    marker.style.transform = `rotate(${i * 6}deg)`; // Устанавливаем поворот метки на основе ее позиции (каждая метка поворачивается на 6 градусов)
    clockFace.appendChild(marker);                 // Добавляем метку на циферблат
}

// Функция для обновления положения стрелок часов
function updateClock() {
    const now = new Date();       
    const hours = now.getHours();    
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 

    // Вычисляем угол поворота для каждой стрелки
    const hourRotation = (hours % 12 + minutes / 60) * 30;                                                     
    const minuteRotation = (minutes + seconds / 60) * 6;
    const secondRotation = seconds * 6;                       
                                                              

    // Применяем вычисленные углы поворота к стрелкам, используя свойство transform
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;       // Поворачиваем часовую стрелку                                                                                 // translate(-50%, -100%) - центрируем стрелку относительно точки вращения
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;   // Поворачиваем минутную стрелку
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;   // Поворачиваем секундную стрелку
}

// Обновляем часы каждую секунду (1000 миллисекунд)
setInterval(updateClock, 1000);

// Вызываем функцию updateClock один раз, чтобы отобразить время при загрузке страницы
updateClock();
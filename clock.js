const clockContainer = document.getElementById("clockContainer");

    // Добавляем числа на циферблат
for (let i = 1; i <= 12; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number");
    numberDiv.textContent = i;

    // Рассчитываем угол и позицию каждого числа
    const angle = (i - 3) * (Math.PI / 6); // Сдвигаем начало отсчета на 3 часа (чтобы 12 было наверху)
    const radius = 80; 

    const x = 100 + radius * Math.cos(angle);
    const y = 100 + radius * Math.sin(angle); 

    numberDiv.style.left = x - 10 + "px";
    numberDiv.style.top = y - 10 + "px";

    clockContainer.appendChild(numberDiv);
}

function updateClock() {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Рассчитываем углы поворота стрелок
    const hourRotation = 30 * hours + minutes / 2; 
    const minuteRotation = 6 * minutes; 
    const secondRotation = 6 * seconds; 

    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
    secondElement.style.transform = `rotate(${secondRotation}deg)`;
  }

  // Обновляем часы каждую секунду
  setInterval(updateClock, 1000);

  // Инициализируем часы при загрузке страницы
  updateClock();
// let body = document.body

// let div_tour = document.getElementById('tour_div')


// Object.assign(div_tour , newPath )



// Задаем массив с информацией о турах
const tours = [
  {
    name: "Катар",
    image: "../public/images/toursImage/qatar.webp",
    link: "/tour/1.html"
  },
  {
    name: "Грузия",
    image: "../public/images/toursImage/georgia.webp",
    link: "/tour/2.html"
  },
  {
    name: "Шарм эль шейх",
    image: "../public/images/toursImage/sharm.webp",
    link: "/tour/3.html"
  },
  {
    name: "Прага",
    image: "../public/images/toursImage/prague.webp",
    link: "/tour/4.html"
  },
  {
    name: "Анталья",
    image: "../public/images/toursImage/antalya.webp",
    link: "/tour/5.html"
  },
  {
    name: "Бали",
    image: "../images/toursImage/bali.webp",
    link: "/tour/6.html"
  }
];

// Получаем контейнер для туров
const tourContainer = document.getElementById("tour_div");

// Создаем элементы для каждого тура и добавляем их в контейнер
tours.forEach(tour => {
  const tourItem = document.createElement("div");
  tourItem.classList.add("aspect-[1/1.33]");

  const tourLink = document.createElement("a");
  tourLink.classList.add("bg-full", "h-full", "bg-center", "flex", "flex-col", "justify-end", "items-center", "lg:hover:bg-org", "duration-300", "lg:cursor-pointer");
  tourLink.href = tour.link;
  tourLink.style.backgroundImage = `url("${tour.image}")`;

  const tourBtn = document.createElement("div");
  tourBtn.id = "tour_btn";
  tourBtn.classList.add("w-full", "py-2", "bg-[var(--main-color-two)]", "text-[#fff]");

  const tourName = document.createElement("p");
  tourName.classList.add("text-lg", "text-center", "font-[500]");
  tourName.textContent = tour.name;

  tourBtn.appendChild(tourName);
  tourLink.appendChild(tourBtn);
  tourItem.appendChild(tourLink);
  tourContainer.appendChild(tourItem);
});



// const tours = [
//   {
//     name: "Катар",
//     image: "/public/images/toursImage/qatar.webp",
//     link: "/tour/1.html",
//     fontClass: "font-[400]"
//   },
//   {
//     name: "Грузия",
//     image: "/public/images/toursImage/georgia.webp",
//     link: "/tour/2.html",
//     fontClass: "font-[500]"
//   },
//   {
//     name: "Шарм эль шейх",
//     image: "/public/images/toursImage/sharm.webp",
//     link: "/tour/3.html",
//     fontClass: "font-[500]"
//   },
//   {
//     name: "Прага",
//     image: "/public/images/toursImage/prague.webp",
//     link: "/tour/4.html",
//     fontClass: "font-[500]"
//   },
//   {
//     name: "Анталья",
//     image: "/public/images/toursImage/antalya.webp",
//     link: "/tour/5.html",
//     fontClass: "font-[500]"
//   },
//   {
//     name: "Бали",
//     image: "/public/images/toursImage/bali.webp",
//     link: "/tour/6.html",
//     fontClass: "font-[500]"
//   }
// ];

// function createTourElement(tour) {
//   const tourItem = document.createElement("div");
//   tourItem.classList.add("aspect-[1/1.33]");

//   const tourLink = document.createElement("a");
//   tourLink.classList.add("bg-full", "h-full", "bg-center", "flex", "flex-col", "justify-end", "items-center", "lg:hover:bg-org", "duration-300", "lg:cursor-pointer");
//   tourLink.href = tour.link;
//   tourLink.style.backgroundImage = `url("${tour.image}")`;

//   const tourBtn = document.createElement("div");
//   tourBtn.id = "tour_btn";
//   tourBtn.classList.add("w-full", "py-2", "bg-[var(--main-color-two)]", "text-[#fff]");

//   const tourName = document.createElement("p");
//   tourName.classList.add("text-lg", "text-center", tour.fontClass);
//   tourName.textContent = tour.name;

//   tourBtn.appendChild(tourName);
//   tourLink.appendChild(tourBtn);
//   tourItem.appendChild(tourLink);
//   return tourItem;
// }

// function appendToursToContainer(container, tours) {
//   tours.forEach(tour => {
//     const tourElement = createTourElement(tour);
//     container.appendChild(tourElement);
//   });
// }

// const tourContainer = document.getElementById("tour_div");
// appendToursToContainer(tourContainer, tours);

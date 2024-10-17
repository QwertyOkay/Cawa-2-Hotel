document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/hotel-data.json")
    .then((response) => response.json())
    .then((data) => {
      let hotelData = data.hotels;
      const hotelList = document.getElementById("our-hotel");

      if (!hotelList) {
        return;
      }

      function displayHotel() {
        hotelData.forEach((hotel) => {
          const li = document.createElement("li");
          li.classList.add("hotel-item");

          li.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
            <div class="hotel-wrapper">
                <h3 class="hotel-item-title">${hotel.name}</h3>
                <p>${hotel.recenzi}</p>
                <p class="hotel-item-text">${hotel.price}</p>
                <a
                href="./contacts.html"
                class="hotel-link"
                rel="noreferrer noopener"
                >Ver detalles
                </a>
              </div>
              
          `;
          hotelList.appendChild(li);
        });
      }

      displayHotel();
    })
    .catch((error) => console.error("error JSON:", error));
});

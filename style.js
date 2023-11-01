// Sample event data (replace with actual event data)
const events = [
    { id: 1, name: 'Event 1', price: 20 },
    { id: 2, name: 'Event 2', price: 30 },
    { id: 3, name: 'Event 3', price: 25 },
];

const eventList = document.getElementById('event-list');
const ticketForm = document.getElementById('ticket-form');

// Display the list of events
function displayEvents() {
    eventList.innerHTML = '<h2>Available Events</h2>';
    events.forEach(event => {
        eventList.innerHTML += `<p>${event.name} - $${event.price} <button onclick="bookTicket(${event.id})">Book</button></p>`;
    });
}

// Handle booking a ticket
function bookTicket(eventId) {
    const event = events.find(event => event.id === eventId);
    if (event) {
        ticketForm.innerHTML = `<h2>Book Tickets for ${event.name}</h2>
            <form>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required>
                <button type="submit">Submit</button>
            </form>`;
    }
}

// Display events when the page loads
displayEvents();
javascript
// Sample event data
const events = [
    {
        title: "Concert Night",
        description: "An evening of live music and entertainment.",
    },
    {
        title: "Tech Conference",
        description: "Stay updated with the latest tech trends and innovations.",
    },
    {
        title: "Sports Game",
        description: "Cheer for your favorite team in this exciting sports event.",
    },
];

// Function to create event cards
function createEventCard(event) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    const title = document.createElement("h3");
    title.classList.add("event-title");
    title.textContent = event.title;

    const description = document.createElement("p");
    description.classList.add("event-description");
    description.textContent = event.description;

    const button = document.createElement("button");
    button.classList.add("event-button");
    button.textContent = "Book Now";

    eventCard.appendChild(title);
    eventCard.appendChild(description);
    eventCard.appendChild(button);

    return eventCard;
}

// Populate event cards
const eventList = document.querySelector(".event-list");
events.forEach(event => {
    const eventCard = createEventCard(event);
    eventList.appendChild(eventCard);
});

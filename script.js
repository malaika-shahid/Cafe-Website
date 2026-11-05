// Task 1: Handle the feedback form without refreshing the page
const form = document.getElementById("feedback-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("form-message");

    if (username !== "" && email !== "") {
        message.textContent = `Thank you for visiting, ${username}! We will contact you at ${email}.`;
        checkDiscount();
    } else {
        message.textContent = "Please fill in both your username and email.";
    }
});

// Task 2: Highlight menu rows on mouseover and restore on mouseout
const menuRows = document.querySelectorAll("#menu-table tbody tr");

menuRows.forEach(function (row) {
    row.addEventListener("mouseover", function () {
        row.style.backgroundColor = "#fff0c2";
    });

    row.addEventListener("mouseout", function () {
        row.style.backgroundColor = "";
    });
});

// Task 3: Toggle light/dark mode using classList
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Task 4: Calculate selected menu items' total using change events
const choices = document.querySelectorAll(".menu-choice");
const totalDisplay = document.getElementById("total");

function updateTotal() {
    let total = 0;

    choices.forEach(function (choice) {
        if (choice.checked) {
            total += Number(choice.value);
        }
    });

    totalDisplay.textContent = `Total: $${total}`;
}

choices.forEach(function (choice) {
    choice.addEventListener("change", updateTotal);
});

// Task 5: Convert birth year to a number and check age-based discount
const birthYearInput = document.getElementById("birth-year");
const discountMessage = document.getElementById("discount-message");

function checkDiscount() {
    const birthYearText = birthYearInput.value.trim();

    if (birthYearText === "") {
        discountMessage.textContent = "Enter your birth year to check discount eligibility.";
        return;
    }

    const birthYear = parseInt(birthYearText, 10);
    const currentYear = new Date().getFullYear();

    if (Number.isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        discountMessage.textContent = "Please enter a valid birth year.";
        return;
    }

    const age = currentYear - birthYear;

    // Example rules: age 25 or younger, or age 60 and above.
    if (age <= 25) {
        discountMessage.textContent = `You are ${age}. You qualify for our student/young customer discount (subject to verification)!`;
    } else if (age >= 60) {
        discountMessage.textContent = `You are ${age}. You qualify for our senior discount!`;
    } else {
        discountMessage.textContent = `You are ${age}. No age-based discount applies.`;
    }
}

birthYearInput.addEventListener("change", checkDiscount);

// Task 6: Toggle extra cafe story text
const readMoreButton = document.getElementById("read-more");
const extraStory = document.getElementById("extra-story");

readMoreButton.addEventListener("click", function () {
    if (extraStory.hidden) {
        extraStory.hidden = false;
        readMoreButton.textContent = "Read Less";
    } else {
        extraStory.hidden = true;
        readMoreButton.textContent = "Read More";
    }
});

// Task 7: Filter menu rows by category
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.category;

        menuRows.forEach(function (row) {
            if (category === "all" || row.dataset.category === category) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });
        button.classList.add("active");
    });
});

// Task 8: Cafe hours are set here as 8 AM to 8 PM

const openingStatus = document.getElementById("opening-status");

const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 20) {
    openingStatus.textContent = "We are Open!";
    openingStatus.style.color = "green";
} else {
    openingStatus.textContent = "Closed - Open at 8 AM";
    openingStatus.style.color = "red";
}


// Task 9: Live character counter for special request textarea
const notes = document.getElementById("special-notes");
const charCount = document.getElementById("char-count");

notes.addEventListener("input", function () {
    const remaining = 100 - notes.value.length;
    charCount.textContent = `${remaining} characters remaining`;
});



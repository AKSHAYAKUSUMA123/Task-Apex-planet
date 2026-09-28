document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "") {
        message.innerText = "All fields are required";
        message.style.color = "red";
    }
    else if (!emailPattern.test(email)) {
        message.innerText = "Invalid Email";
        message.style.color = "red";
    }
    else {
        message.innerText = "Form submitted successfully";
        message.style.color = "green";

        document.getElementById("contactForm").reset();
    }
});

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
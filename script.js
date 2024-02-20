document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form");
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default form submission
        addTask();
    });

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function addTask() {
        if (inputBox.value.trim() === '') {
            alert("Please add an item!");
            return;
        }
        let li = document.createElement("li");
        li.textContent = inputBox.value.trim(); // Use textContent for better security
        let span = document.createElement("span");
        span.textContent = "\u00D7";
        span.setAttribute("role", "button"); // Improve accessibility
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        const data = localStorage.getItem("data");
        if (data) {
            listContainer.innerHTML = data;
        }
    }

    showTask();
});

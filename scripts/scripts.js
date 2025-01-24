// Array of courses
const courses = [
  { id: 1, name: "CSE 110", credits: 3, completed: true },
  { id: 2, name: "WDD 130", credits: 3, completed: true },
  { id: 3, name: "CSE 111", credits: 4, completed: false },
  { id: 4, name: "CSE 210", credits: 3, completed: false },
  { id: 5, name: "WDD 131", credits: 3, completed: true },
  { id: 6, name: "WDD 231", credits: 3, completed: false },
];

const courseList = document.querySelector(".course-list");
const filterButtons = document.querySelectorAll(".filter-buttons button");

// Function to display courses
function displayCourses(filter = "all") {
  courseList.innerHTML = ""; // Clear existing courses
  let filteredCourses = courses;

  if (filter === "CSE") {
    filteredCourses = courses.filter((course) => course.name.includes("CSE"));
  } else if (filter === "WDD") {
    filteredCourses = courses.filter((course) => course.name.includes("WDD"));
  }

  filteredCourses.forEach((course) => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    if (course.completed) {
      courseItem.classList.add("completed");
    }
    courseItem.textContent = `${course.name} (${course.credits} credits)`;
    courseList.appendChild(courseItem);
  });

  // Display total credits dynamically
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  document.querySelector(".total-credits").textContent = `Total Credits: ${totalCredits}`;
}

// Add click event to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active")); // Remove active class
    button.classList.add("active"); // Highlight active filter
    displayCourses(button.dataset.filter); // Apply filter
  });
});

// Footer dynamic date updates
document.querySelector("#copyright-year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initial display of all courses
displayCourses();



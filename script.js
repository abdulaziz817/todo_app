let categories = [
  {
    title: "Pribadi",
    img: "boy.png",
  },
  {
    title: "Pekerjaan",
    img: "briefcase.png",
  },
  {
    title: "Belanja",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Kesehatan",
    img: "healthcare.png",
  },
  {
    title: "Kebugaran",
    img: "dumbbell.png",
  },
  {
    title: "Edukasi",
    img: "education.png",
  },
  {
    title: "Keuangan",
    img: "saving.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "Pergi ke pasar",
    category: "Belanja",
    completed: false,
  },
  {
    id: 2,
    task: "Baca satu bab buku",
    category: "Pribadi",
    completed: false,
  },
  {
    id: 3,
    task: "Persiapkan presentasi untuk rapat",
    category: "Pekerjaan",
    completed: false,
  },
  {
    id: 4,
    task: "Selesaikan tantangan coding",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Berjalan kaki selama 30 menit",
    category: "Kesehatan",
    completed: false,
  },
  {
    id: 6,
    task: "Lakukan HIIT selama 20 menit",
    category: "Kebugaran",
    completed: false,
  },
  {
    id: 7,
    task: "Tonton video edukasi online",
    category: "Edukasi",
    completed: false,
  },
  {
    id: 8,
    task: "Tinjau anggaran bulanan",
    category: "Keuangan",
    completed: false,
  },
  {
    id: 9,
    task: "Beli bahan makanan untuk seminggu",
    category: "Belanja",
    completed: false,
  },
  {
    id: 10,
    task: "Tulis di jurnal",
    category: "Pribadi",
    completed: false,
  },
  {
    id: 11,
    task: "Kirim email tindak lanjut",
    category: "Pekerjaan",
    completed: false,
  },
  {
    id: 12,
    task: "Kerjakan proyek coding sampingan",
    category: "Coding",
    completed: false,
  },
  {
    id: 13,
    task: "Coba resep sehat baru",
    category: "Kesehatan",
    completed: false,
  },
  {
    id: 14,
    task: "Ikuti kelas yoga",
    category: "Kebugaran",
    completed: false,
  },
  {
    id: 15,
    task: "Baca artikel tentang topik baru",
    category: "Edukasi",
    completed: false,
  },
  {
    id: 16,
    task: "Atur pembayaran tagihan otomatis",
    category: "Keuangan",
    completed: false,
  },
  // Tugas tambahan untuk setiap kategori
  {
    id: 17,
    task: "Beli pakaian baru",
    category: "Belanja",
    completed: false,
  },
  {
    id: 18,
    task: "Meditasi selama 10 menit",
    category: "Pribadi",
    completed: false,
  },
  {
    id: 19,
    task: "Persiapkan agenda untuk rapat tim",
    category: "Pekerjaan",
    completed: false,
  },
  {
    id: 20,
    task: "Debug masalah perangkat lunak",
    category: "Coding",
    completed: false,
  },
  {
    id: 21,
    task: "Coba resep baru untuk makan siang",
    category: "Kesehatan",
    completed: false,
  },
  {
    id: 22,
    task: "Lari pagi",
    category: "Kebugaran",
    completed: false,
  },
  {
    id: 23,
    task: "Belajar bahasa baru online",
    category: "Edukasi",
    completed: false,
  },
  {
    id: 24,
    task: "Baca tentang sejarah",
    category: "Edukasi",
    completed: false,
  },
  {
    id: 25,
    task: "Tinjau portofolio investasi",
    category: "Keuangan",
    completed: false,
  },
  // Tambahkan tugas lebih lanjut untuk setiap kategori sesuai keinginan
];


// Define functions
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal;
  }
};

const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
};

const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      screenWrapper.classList.toggle("show-category");
      selectedCategory = category;
      updateTotals();
      categoryTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;
      renderTasks();
    });

    div.innerHTML = `
                  <div class="left">
                <img src="images/${category.img}"
                 alt="${category.title}"
                  />
                <div class="content">
                  <h1>${category.title}</h1>
                  <p>${categoryTasks.length} Tasks</p>
                </div>
              </div>
              <div class="options">
                <div class="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </div>
    `;

    categoriesContainer.appendChild(div);
  });
};

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index].completed = !tasks[index].completed;
        saveLocal();
      });
      div.innerHTML = `
      <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              `;
      label.innerHTML = `
              <span class="checkmark"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <p>${task.task}</p>
        `;
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });

    renderCategories();
    updateTotals();
  }
};

const toggleAddTaskForm = () => {
  addTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const category = categorySelect.value;

  if (task === "") {
    alert("Please enter a task");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    };
    taskInput.value = "";
    tasks.push(newTask);
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
};

// Initialize variables and DOM elements
let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const categorySelect = document.getElementById("category-select");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const totalTasks = document.getElementById("total-tasks");

// Attach event listeners
menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn.addEventListener("click", addTask);
cancelBtn.addEventListener("click", toggleAddTaskForm);

// Render initial state
getLocal();
renderTasks();
categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});

// Initialize tsParticles
tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            onClick: {
                enable: true,
                mode: "push"
            }
        }
    }
});

// Array of people data
const people = [
    {
        name: "Md Maruf",
        id: "242015312",
        mail: "242015312@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Nimmi",
        id: "242016212",
        mail: "242016212@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Kaiser Kamal Ifthe",
        id: "242018212",
        mail: "242018212@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Mayesha",
        id: "242016112",
        mail: "242016112@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "Preparing for CU Admission Test",
        section: "N/A"
    },
    {
        name: "Miftah Al Rahman",
        id: "242017212",
        mail: "242017212@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Naim Uddin",
        id: "242016642",
        mail: "242016642@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Nusrat Jahan Antora",
        id: "242023212",
        mail: "242023212@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Sadnan",
        id: "242017512",
        mail: "242017512@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Ibrahim Khan",
        id: "242017312",
        mail: "242017312@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Saika Jahan",
        id: "242023312",
        mail: "242023312@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Mohima",
        id: "242023112",
        mail: "242023112@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    },
    {
        name: "Md Robiul Hossain",
        id: "242014512",
        mail: "242014512@eastdelta.edu.bd",
        program: "B.Sc. in CSE",
        semester: "3rd (running)",
        section: "07"
    }
];

// Get HTML elements
let searchInput = document.getElementById("search");
let resultTable = document.getElementById("result-table");
let errorMessage = document.getElementById("error-message");

// Function to filter names and show them as preview
searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.toLowerCase();
    let results = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm) || person.id.includes(searchTerm)
    );

    let previewList = results.map(person => {
        return `<div class="preview-item" onclick="showPersonData('${person.id}')">
                    ${person.name} <br> Id: ${person.id}
                </div>`;
    }).join('');

    if (previewList.length === 0) {
        errorMessage.textContent = "No Naggins Found";
    } else {
        errorMessage.textContent = "";
    }

    // Display preview list
    document.getElementById("preview-list").innerHTML = previewList;
});

// Function to display person details in the result table
function showPersonData(id) {
    let person = people.find(person => person.id === id);
    
    if (person) {
        document.getElementById("name").textContent = person.name;
        document.getElementById("id").textContent = person.id;
        document.getElementById("mail").textContent = person.mail;
        document.getElementById("program").textContent = person.program;
        document.getElementById("semester").textContent = person.semester;
        document.getElementById("section").textContent = person.section;
        
        resultTable.style.display = "block";
    }
}

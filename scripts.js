// Initialize Particles
tsParticles.load("tsparticles", {
    background: { color: "#000" },
    particles: {
        number: { value: 50 },
        move: { enable: true, speed: 0.5 },
        size: { value: 3 },
        color: { value: "#ffffff" },
        links: { enable: true, color: "#ffffff" }
    }
});

// Sample data
const persons = [
    { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", status: "Currently doing preparation for CU admission test" },
    { name: "Miftah Al Rahman", id: "242017212", mail: "242017212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Naim Uddin", id: "242016642", mail: "242016642@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nusrat Jahan Antora", id: "242023212", mail: "242023212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Sadnan", id: "242017512", mail: "242017512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Ibrahim Khan", id: "242017312", mail: "242017312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Saika Jahan", id: "242023312", mail: "242023312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mohima", id: "242023112", mail: "242023112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Md Robiul Hossain", id: "242014512", mail: "242014512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const infoTable = document.getElementById('infoTable');

// Search functionality
function handleSearch() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (!query) {
        searchResults.style.display = 'none';
        infoTable.style.display = 'none';
        return;
    }

    const filtered = persons.filter(person =>
        person.name.toLowerCase().includes(query) || 
        person.id.includes(query)
    );

    if (filtered.length > 0) {
        filtered.forEach(person => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${person.name}</strong> - ID: ${person.id}`;
            li.addEventListener('click', () => showPersonDetails(person));
            searchResults.appendChild(li);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}

// Show person details
function showPersonDetails(person) {
    infoTable.innerHTML = `
        <tbody>
            ${Object.entries(person).map(([key, value]) => `
                <tr>
                    <td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                    <td>${value}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    infoTable.style.display = 'table';
    searchResults.style.display = 'none';
    searchInput.value = '';
}

// Event listeners
searchInput.addEventListener('input', handleSearch);
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar') && !e.target.closest('.search-results')) {
        searchResults.style.display = 'none';
    }
});

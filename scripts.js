const persons = [
    { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", program: "Currently doing preparation for CU admission test." },
    { name: "Miftah Al Rahman", id: "242017212", mail: "242017212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Naim Uddin", id: "242016642", mail: "242016642@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nusrat Jahan Antora", id: "242023212", mail: "242023212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Sadnan", id: "242017512", mail: "242017512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Ibrahim Khan", id: "242017312", mail: "242017312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Saika Jahan", id: "242023312", mail: "242023312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mohima", id: "242023112", mail: "242023112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Md Robiul Hossain", id: "242014512", mail: "242014512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
];

function handleSearch() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const result = persons.find(person => person.name.toLowerCase() === searchValue || person.id === searchValue);
    
    if (result) {
        displayResult(result);
        document.getElementById("error-message").style.display = "none";
    } else {
        document.getElementById("error-message").textContent = "No Naggins Found";
        document.getElementById("error-message").style.display = "block";
        document.getElementById("result-table").style.display = "none";
    }
}

function handlePreview() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const previewContainer = document.getElementById("preview-container");

    const previewSuggestions = persons.filter(person => person.name.toLowerCase().startsWith(searchValue) || person.id.startsWith(searchValue));

    if (searchValue.length > 0 && previewSuggestions.length > 0) {
        previewContainer.style.display = "block";
        previewContainer.innerHTML = previewSuggestions.map(person => `
            <div class="preview-item" onclick="handleSelectPreview('${person.name}')">
                ${person.name} <br> Id: ${person.id}
            </div>
        `).join('');
    } else {
        previewContainer.style.display = "none";
    }
}

function handleSelectPreview(name) {
    document.getElementById("search-bar").value = name;
    handleSearch();
}

function displayResult(person) {
    const resultTable = document.getElementById("result-table");
    resultTable.style.display = "block";
    
    resultTable.innerHTML = `
        <tr><td>Name</td><td>${person.name}</td></tr>
        <tr><td>Id</td><td>${person.id}</td></tr>
        <tr><td>Mail</td><td>${person.mail}</td></tr>
        <tr><td>Program</td><td>${person.program}</td></tr>
        <tr><td>Semester</td><td>${person.semester}</td></tr>
        <tr><td>Section</td><td>${person.section}</td></tr>
    `;
}

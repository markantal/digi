let people = [
    'firstname',
    'phone',
    'email',
    'address',
    'city',
    'province',
    'postcode',
];

people.firstname = ['Christian', 'Rich', 'Scott', 'Danny', 'Taka', 'Tim', 'Patrick', 'Jacques'];
people.phone = ['323-555-1234', '323-555-1234', '555-555-5555', '323-555-1234', '323-555-1234', '323-555-1234', '323-555-1234', '323-555-1234', ];
people.email = ['christian@yahoo.com', 'rich@tripod.com', 'scott@mailnator.com', 'danny@hotmail.com', 'taka@myspace.com', 'tim@netscape.com', 'patrick@live.com', 'jacques@aol.com'];
people.address = ['123 street', '123 street', '123 street', '123 street', '123 street', '123 street', '123 street', '123 street'];
people.city = ['big city', 'big city', 'big city', 'big city', 'big city', 'big city', 'big city', 'big city'];
people.province = ['WC', 'WC', 'WC', 'WC', 'WC', 'WC', 'WC', 'WC'];
people.postcode = ['8000', '8000', '8000', '8000', '8000', '8000', '8000', '8000'];


const addPeople = document.querySelector('#formUpdate');
const contactList = document.querySelector('.persons');

let peoplesArray = localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [];

localStorage.setItem('people', JSON.stringify(peoplesArray));
const data = JSON.parse(localStorage.getItem('people'));

const tdMaker = (text) => {
    const td = document.createElement('td');
    const td = document.createElement('td');
    td.textContent = text;
    tr.appendChild(td);
}

function addContact(firstname, email, phone, address, city, province, postcode) {

    people.push({
        "firstname": firstname,
        "email": email,
        "phone": phone,
        "address": address,
        "city": city,
        "province": province,
        "postcode": postcode,

    });
    document.getElementById('alert').innerHTML = "Successfully addes!";
}


function selection() {
    var selected = document.getElementById("EmailOrPhone");
    if (selected[selected.selectedIndex].value == "email") {
        document.getElementById("tblEmail").style.display = "table";
        document.getElementById("tblPhone").style.display = "none";

    } else

    if (selected[selected.selectedIndex].value == "phone") {
        document.getElementById("tblEmail").style.display = "none";
        document.getElementById("tblPhone").style.display = "table";
    }

}

//Delete function
function delete_contact(firstname) {
    contacts.remove("firstname", name);
    document.getElementById("status").innerHTML = "Successfully deleted.";
}

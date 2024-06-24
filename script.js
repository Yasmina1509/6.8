document.getElementById('send').addEventListener('click', function() {
    let limit = document.getElementById('limit').value;
    let age = document.getElementById('age').value;

    document.getElementById('user-limit').textContent = limit;
    document.getElementById('age-limit').textContent = age;

    fetch(`https://dummyjson.com/users?limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            displayUsers(data.users);
            displayFilteredUsers(data.users, age);
        });
});

function displayUsers(users) {
    let userContainer = document.getElementById('user-list');
    userContainer.innerHTML = '';

    users.forEach(user => {
        let userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <p>Name: ${user.firstName} ${user.lastName}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.address}</p>
            <p>Age: ${user.age}</p>
            <p>Phone number: ${user.phone}</p>
            <p>Born Date: ${user.birthDate}</p>
        `;
        userContainer.appendChild(userCard);
    });
}

function displayFilteredUsers(users, ageLimit) {
    let filteredUserContainer = document.getElementById('filtered-user-list');
    filteredUserContainer.innerHTML = '';

    let filteredUsers = users.filter(user => user.age > ageLimit);
    filteredUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <p>Name: ${user.firstName} ${user.lastName}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.address}</p>
            <p>Age: ${user.age}</p>
            <p>Phone number: ${user.phone}</p>
            <p>Born Date: ${user.birthDate}</p>
        `;
        filteredUserContainer.appendChild(userCard);
    });
}
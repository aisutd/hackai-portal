const teammateList = document.querySelector('#teammate-list');

function renderTeammates(doc) {
  let li = document.createElement('li');
  let firstName = document.createElement('span');
  let lastName = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  firstName.textContent = doc.data().firstName;
  lastName.textContent = doc.data().lastname;

  li.appendChild(firstName);
  li.appendChild(lastName);

  teammateList.appendChild(li);
}

db.collection('registrations')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderTeammates(doc);
    });
  });

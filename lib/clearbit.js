// TODO
// récupérer le form et le stocker
// poser un écouter sur le form au submit
// récupérer la valeur de l'input
// fetcher l'api de clearbit en lui donnant l'email
// sélectionner dans la réponse les infos qui nous intéressent
// sélectionner la ou on va vouloir insérer les infos
// insérer les infos


// Insérer votre clé API de clearbit en créant un compte: https://dashboard.clearbit.com/api
const authorization = "Bearer sk_votre_api_key";
const form = document.querySelector('#clearbitForm');
const url = 'https://person-stream.clearbit.com/v1/people/email/'
const insertInfos = (data) => {
  document.querySelector('#userName').innerText = data.name.fullName;
  document.querySelector('#userEmail').innerText = data.email;
  document.querySelector('#userBio').innerText = data.bio;
  document.querySelector('#userLocation').innerText = data.location;
}
const fetchClearbit = (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('#clearbitEmail').value;
  // on a stocké l'url donc on peut la combiner avec la value de l'input
  fetch(url + inputValue, {
    headers: { Authorization: authorization }
  })
  .then(response => response.json())
  .then(insertInfos);
}

form.addEventListener('submit', fetchClearbit);

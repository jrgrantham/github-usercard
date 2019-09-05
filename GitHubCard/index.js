const testUser = {
  "login": "tetondan",
  "id": 8883343,
  "node_id": "MDQ6VXNlcjg4ODMzNDM=",
  "avatar_url": "https://avatars2.githubusercontent.com/u/8883343?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tetondan",
  "html_url": "https://github.com/tetondan",
  "followers_url": "https://api.github.com/users/tetondan/followers",
  "following_url": "https://api.github.com/users/tetondan/following{/other_user}",
  "gists_url": "https://api.github.com/users/tetondan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tetondan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tetondan/subscriptions",
  "organizations_url": "https://api.github.com/users/tetondan/orgs",
  "repos_url": "https://api.github.com/users/tetondan/repos",
  "events_url": "https://api.github.com/users/tetondan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tetondan/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Daniel Frehner",
  "company": null,
  "blog": "http://www.danielfrehner.com",
  "location": "Jackson Hole, Wy",
  "email": null,
  "hireable": null,
  "bio": "Program Manager (PT Web) @ Lambda School\r\n",
  "public_repos": 49,
  "public_gists": 3,
  "followers": 75,
  "following": 8,
  "created_at": "2014-09-23T17:47:56Z",
  "updated_at": "2019-07-18T03:10:54Z"
};

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://lambda-github-api-server.herokuapp.com')
  .then((data) => {
    // debugger
    document.querySelector('.cards').appendChild(userMaker(data.data))
  })
  .catch(error => {
    document.body.innerText = error.message;
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/jgrantham/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'jgrantham',
  'emkayDauda',
  'richanynguon',
  'alisonludick',
  'tetondan',
  'VictorArowo',
  'jasynmarais',
  'ifiokudoidiok',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

const followersLinks = followersArray.map((person)  => 'https://github.com/' + person)

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function userMaker(response) {

  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const a = document.createElement('a');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(p1);
  cardInfo.appendChild(p2);
  cardInfo.appendChild(p3);
  cardInfo.appendChild(p4);
  cardInfo.appendChild(p5);
  cardInfo.appendChild(p6);
  p3.appendChild(a);

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name');
  p1.classList.add('username')

  img.src = response.avatar_url;
  h3.textContent = response.name;
  p1.textContent = response.login;
  p2.textContent = response.location;
  p4.textContent = response.followers;
  p5.textContent = response.following;
  p6.textContent = response.bio;
  a.textContent = response.url;

  return card;
}
// const userCard = userMaker(testUser);
// const cardsContainer = document.querySelector('.cards');
// cardsContainer.appendChild(card);


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log('Reading a user from a database');
      resolve({ id: id, gitHubUsername: 'jiangshan' });
    }, 2000);
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling Github API...');
      resolve(['repo1','repo2','repo3']);  
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      console.log('Calling Github API...');
      resolve([repo]);
    }, 2000);
  })
}

console.log('Before');

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repo => getCommits(repo[0]))
  .then(message => console.log(message))
  .catch(error => console.log('error', error.message));

// const p = getUser(1).then((user) => {
//   console.log(user);
// })

console.log('After');


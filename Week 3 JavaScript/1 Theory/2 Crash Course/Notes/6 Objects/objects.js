// let userFirstName = 'David'
// let userLastName = 'Bragg'
// let userDiscordId = 'David Bragg#0001'
// let userSubsriptionStatus = 'VIP'

// let users = [
//   {
//     userName: "David",
//     email: "david@frontendsimplified.com",
//     password: "test123",
//     subscriptionStatus: "VIP",
//     discordId: "David Bragg#0001",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     userName: "Mitri",
//     email: "mitri@frontendsimplified.com",
//     password: "mitri123",
//     subscriptionStatus: "VIP",
//     discordId: "Mitri#0001",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
// ];

// function login(email, password) {
//   for (let i=0; i < users.length; ++i) {
//     console.log(users[i]);
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log('log the user in - the details are correct')
//       }
//       else {
//         console.log('password is incorrect - try again')
//       }
//       return;
//     }
//   }
//   console.log('could not find an email that matches')
// }

// login('dsadasdavid@frontendsimplified.com', 'test123');

// Exercise 1:

// Inside your register function:
// 1. Create a user object
// 2. Push this user object onto the 'users' array

let users = [
  {
    userName: "user1",
    email: "user1@frontendsimplified.com",
    password: "user1test123",
    subscriptionStatus: "VIP",
    discordId: "user1#0001",
    lessonsCompleted: [0, 1],
  },
  {
    userName: "user2",
    email: "user2@frontendsimplified.com",
    password: "user2test123",
    subscriptionStatus: "VIP",
    discordId: "user2#0001",
    lessonsCompleted: [0, 1, 3],
  },
];

function register(user) {
  users.push(user);
}
  
register({
  username: "user3",
  email: "user3@frontendsimplified.com",
  password: "user3test123",
  subscriptionStatus: "VIP",
  discordId: "user3#0001",
  lessonsCompleted: "[0,1]",
});

// log the new user in
console.log(users);

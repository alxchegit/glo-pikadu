let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('visible');
})

const loginElem   = document.querySelector('.login');
const loginForm   = document.querySelector('.login-form');
const emailInput  = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup   = document.querySelector('.login-signup');

const userElem  = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');


const listUsers = [
  {
    id: '01',
    email: 'maksjs@mailo.com',
    password: '12345',
    displayName: 'MaksJs'
  },
  {
    id: '02',
    email: 'aleksjs@mailo.com',
    password: '12345',
    displayName: 'AlexsJs'
  },
];


const setUsers = {
  user: null,
  logIn(email, password, handler) {
   const user = this.getUser(email);
   if (user && user.password === password) {
    this.authorizedUser(user);
    handler();
   } else {
     alert("Пользователь не найден")
   }

  },
  signUp(email, password, handler) {
    // console.log('signIn: ');
    if(!this.getUser(email)){
      const dispName = email.split('@')[0];
      const user = {email, password, displayName: dispName};
      listUsers.push(user)
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с таким email уже зареган');
    }
  },
  
  logOut() {
    console.log('logOut: ');

  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  },
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display =  '';
    userElem.style.dysplay = 'none';
  }
   
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
});

toggleAuthDom();
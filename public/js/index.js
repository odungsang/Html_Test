const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

const headerUserNameElement = document.querySelector('.user');

const localuserName = localStorage.getItem('userName');

const userNameElement = document.querySelector('#name');

const userNumber = document.querySelector('.user-number');

const localuserNumber = localStorage.getItem('userNumber');

const userEmail = document.querySelector('.user-email');

const localuserEmail = localStorage.getItem('userEmail');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name}<span>님</span>`;
  userNameElement.textContent = name;
  // userNameElement.innerHTML = `<span id='name'>${name}</span><span>님</span>`;
};

const setUserNumberInnerHtml = (number) => {
  userNumber.innerHTML = `${number}`;
};

const setUserEmailInnerHtml = (email) => {
  userEmail.innerHTML = `${email}`;
};

// 이름변경
if (localuserName) {
  setUserNameInnerHtml(localuserName);
}
userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};
// 학번 이메일

if (localuserNumber) {
  setUserNumberInnerHtml(localuserNumber);
}
userNumber.onclick = () => {
  const number = prompt('학번을 입력해 주세요');
  if (number != '' && number.length <= 10) {
    localStorage.setItem('userNumber', number);
    setUserNumberInnerHtml(number);
  } else if (number.length >= 10) {
    alert('9자리로 입력해주세요');
  } else if (number == '') {
    alert('값을 입력해 주세요');
  }
};

if (localuserEmail) {
  setUserEmailInnerHtml(localuserEmail);
}
userEmail.onclick = () => {
  const Email = prompt('이메일을 입력해 주새요');
  if (Email != '' && Email.match(regex)) {
    localStorage.setItem('userEmail', Email);
    setUserEmailInnerHtml(Email);
  } else if (!Email.match(regex)) {
    alert('이메일 형식을 지켜주세요');
  } else if (Email == '') {
    alert('값을 입력해 주세요');
  }
};



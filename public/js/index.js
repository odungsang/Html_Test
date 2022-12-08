const headerUserNameElement = document.querySelector('.user');

const localuserName = localStorage.getItem('userName');

const userNameElement = document.querySelector('#name');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name}<span>님</span>`;
  userNameElement.textContent = name;
  // userNameElement.innerHTML = `<span id='name'>${name}</span><span>님</span>`;
};

if (localuserName) {
  setUserNameInnerHtml(localuserName);
}
userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};



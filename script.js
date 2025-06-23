
Kakao.init('1ea99b46c313d7dcdcfb12249f669f164');
Kakao.Link.createDefaultButton({
  container: '#kakao-link-btn',
  objectType: 'feed',
  content: {
    title: '故 김덕수님 부고 안내',
    description: '서울중앙병원 장례식장 | 발인: 7월 24일 오전 9시',
    imageUrl: 'https://your-image-link.com/funeral-cover.jpg',
    link: {
      mobileWebUrl: 'about:blank',
      webUrl: 'about:blank'
    }
  },
  buttons: []
});

const form = document.getElementById("condolence-form");
const list = document.getElementById("message-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("visitor-name").value.trim();
  const msg = document.getElementById("visitor-message").value.trim();
  if (name && msg) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<strong>${name}</strong>: ${msg}`;
    list.prepend(messageDiv);
    form.reset();
  }
});

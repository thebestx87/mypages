// ✅ 1. 카카오톡 공유 초기화
Kakao.init('1ea99b46c313d7dcdcfb12249f669f16');  // 예: Kakao.init('1234567890abcdef1234567890abcdef');

Kakao.Link.createDefaultButton({
  container: '#kakao-link-btn',
  objectType: 'feed',
  content: {
    title: '故 김덕수님 부고 안내',
    description: '서울중앙병원 장례식장 | 발인: 6월 24일 오전 9시',
    imageUrl: 'https://your-image-link.com/funeral-cover.jpg', // 썸네일 이미지
    link: {
      mobileWebUrl: 'about:blank',  // 링크 없이 깔끔한 공유
      webUrl: 'about:blank'
    }
  },
  buttons: []  // 버튼 제거 → 미리보기 카드만 보여짐
});

// ✅ 2. 조문 메시지 저장 및 출력 (localStorage)
const form = document.getElementById("condolence-form");
const list = document.getElementById("message-list");

// 메시지 그려주는 함수
function renderMessages() {
  const messages = JSON.parse(localStorage.getItem("condolenceMessages") || "[]");
  list.innerHTML = "";

  if (messages.length === 0) {
    // 하드코딩된 기본 메시지들
    list.innerHTML = `
      <div class="message"><strong>김민수</strong>: 고인의 명복을 빕니다.</div>
      <div class="message"><strong>박지은</strong>: 깊은 애도를 표합니다.</div>
      <div class="message"><strong>이정훈</strong>: 삼가 고인의 평안을 기원합니다.</div>
    `;
    return;
  }

  messages.forEach(({ name, message }) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
    list.appendChild(messageDiv);
  });
}

// 메시지 폼 제출 이벤트
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("visitor-name").value.trim();
  const msg = document.getElementById("visitor-message").value.trim();

  if (name && msg) {
    const messages = JSON.parse(localStorage.getItem("condolenceMessages") || "[]");
    messages.unshift({ name, message: msg }); // 최신 메시지가 위로
    localStorage.setItem("condolenceMessages", JSON.stringify(messages));
    renderMessages();
    form.reset();
  }
});

// 페이지 로딩 시 기존 메시지 불러오기
window.addEventListener("DOMContentLoaded", renderMessages);

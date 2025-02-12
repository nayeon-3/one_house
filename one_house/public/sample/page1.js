	document.addEventListener("DOMContentLoaded", function () {
    	const priceElement = document.querySelector(".price");

    // 가격 정보를 클릭하면 알림창이 뜨는 기능 추가
    if (priceElement) {
        priceElement.addEventListener("click", function () {
            alert("월세 범위는 26~40만원입니다.");
        });
    }

    // 네비게이션 메뉴 호버 효과 추가
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.color = "#ff5722";
        });
        link.addEventListener("mouseleave", function () {
            this.style.color = "#333";
        });
    });
});

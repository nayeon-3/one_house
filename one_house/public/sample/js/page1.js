	document.addEventListener("DOMContentLoaded", function () {
    	const priceElement = document.querySelector(".price");

    // 가격 정보를 클릭하면 알림창이 뜨는 기능 추가
    if (priceElement) {
        priceElement.addEventListener("click", function () {
            alert("월세 범위는 26~40만원입니다.");
        });
    }
});

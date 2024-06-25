// 엔터 키 입력 감지
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

// 검색 버튼 클릭 시 검색 함수 호출
document.getElementById("searchButton").addEventListener("click", function() {
    search();
});

// 검색 기능 함수
function search() {
    var searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput !== "") {
        var searchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchInput);
        window.open(searchUrl, "_blank"); // 새 창에서 열기
    }
}

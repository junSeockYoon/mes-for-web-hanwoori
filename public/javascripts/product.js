const modal = document.getElementById("modalWrap");
const closeBtn = document.getElementById("closeBtn");


function addProduct(){
  // alert("hey");
  const modal = document.getElementById("modalWrap");
  modal.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
}

function closeModal(){
  const modal = document.getElementById("modalWrap");
  const closeBtn = document.getElementById("closeBtn");
  modal.style.display = "none"; // 모달을 닫는 버튼(X)을 클릭하면 모달을 숨김
}

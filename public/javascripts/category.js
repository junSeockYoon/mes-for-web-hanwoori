function deleteCategory(number) {
    // console.log($('.cateId').get(number).textContent);
    // console.log(number);

    if (confirm("정말로 삭제하시겠습니까?")) {
        $.ajax({
            method: 'POST',
            url: '/product/deleteCategory',
            data: { cateId: $('.cateId').get(number).textContent },
            success: function () {
                alert("성공적으로 삭제하였습니다")
                location.reload();
            },
            error: function () {
                alert("에러발생")
            }
        })
    } else {
        return false;
    }



}

function doSubmit(){
    var frm = document.searchForm;

    if(!frm.cateName.value.trim()){
        alert("카테고리 이름을 입력하세요");
        frm.cateName.focus();
        return false;
    }
    
    return ture;
}
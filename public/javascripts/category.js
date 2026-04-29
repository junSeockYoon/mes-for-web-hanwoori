function deleteCategory(number) {
    console.log($('.cateId').get(number).textContent);
    // console.log(number);
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

}
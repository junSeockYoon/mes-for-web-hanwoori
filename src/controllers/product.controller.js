// 서비스 계층(실제 비즈니스 로직을 처리하는 부분)에서 mainService 객체를 가져옵니다.
// 컨트롤러는 여기서 가져온 서비스의 함수들을 호출해서 실제 작업을 시킵니다.
const { prodService } = require('../services');

/**
 * 메인 페이지를 렌더링하는 컨트롤러
 * 모든 게시글 목록을 보여주는 역할을 합니다.
 */
async function index(req, res) {
    try {
        const result = await prodService.prodList();
        res.render('product/product', {result});
    } catch (error) {
        console.error('=== 재고관리 페이지 에러 ===');
        console.error(error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

async function category(req, res) {
    try {
        const result = await prodService.categoryList();
        // console.log(result);
        res.render('product/category', {result});
    } catch (error) {
        console.error('=== 재고관리 페이지 에러 ===');
        console.error(error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

async function saveProduct(req, res) {
    try {
        let params = {
            ...req.body
        }
        const result = await prodService.saveProduct(params);
        // console.log(params);
    } catch (error) {
        console.error('=== 재고관리 페이지 에러 ===');
        console.error(error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

async function cateName(req, res) {
    try {
        let params = {
            ...req.body
        }
        const result = await prodService.cateName(params);
        console.log(params);
    } catch (error) {
        console.error('=== 재고관리 페이지 에러 ===');
        console.error(error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

module.exports = {
    index,
    category,
    saveProduct,
    cateName
};
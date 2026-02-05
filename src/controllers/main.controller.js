// 서비스 계층(실제 비즈니스 로직을 처리하는 부분)에서 mainService 객체를 가져옵니다.
// 컨트롤러는 여기서 가져온 서비스의 함수들을 호출해서 실제 작업을 시킵니다.
const { mainService } = require('../services');

/**
 * 메인 페이지를 렌더링하는 컨트롤러
 * 모든 게시글 목록을 보여주는 역할을 합니다.
 */
async function index(req, res) {
    try {
        res.render('main');
    } catch (error) {
        console.error('=== 메인 페이지 에러 ===');
        console.error(error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

module.exports = {
    index,
};
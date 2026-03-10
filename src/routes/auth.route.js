// Express 모듈 로드 : 라우터를 사용하기 위해 불러옴
const express = require('express');

// 로그인, 회원가입 로직이 구현된 컨트롤러 불러옴
const authController = require('../controllers/auth.controller');

// 이 파일에서 사용할 하위 라우터 인스턴스 생성함
const router = express.Router();

/****************************************************************************************
 *!                                     V I E W
 *  화면 렌더링용 라우트: 브라우저에 EJS 템플릿을 렌더링하여 반환
 ****************************************************************************************/

 // 로그인 페이지
 router.get('/login', authController.login);

 router.post('/api/login', authController.loginPost);


 // 회원가입 페이지
 router.get('/join', authController.join);

 router.post('/api/join', authController.joinPost);

 
 // 이 라우터를 외부로 내보내 상위 라우터 (index.js)에서 사용
 module.exports = router;

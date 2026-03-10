const { authService } = require('../services');

// 로그인 페이지
async function login(req, res) {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

async function loginPost(req, res) {
    try {
        let params = {
            ...req.body
        
        }
        console.log(params)
        const result = await authService.login(params);
        

        // 로그인 실패 : 결과가 없거나 빈 배열인 경우
        if(!result || result.length === 0) {
            return res.redirect('/auth/login?error = 아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.'});
    }
}

// 회원가입 페이지
async function join(req, res) {
    try {
        res.render('join');
    } catch (error) {
        res.status(500).send('서버 오류가 발생했습니다.');
    }
}

async function joinPost(req, res) {
    try {
        let params = {
            ...req.body
        }
        const result = await authService.join(params)

        return res.json({ data: result})
    } catch (error) {
        res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.'})
    }
}

// 위에서 정의한 컨트롤러 함수들을 다른 파일(주로 라우터)에서 사용할 수 있도록 export
module.exports = {
    login,
    loginPost,
    join,
    joinPost
}
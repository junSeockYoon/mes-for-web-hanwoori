## MES for Web (Hanwoori)

간단한 MES 웹 서버 프로젝트입니다. Node.js + Express 기반으로 동작하며, EJS 템플릿으로 화면을 렌더링합니다.

---

### 폴더 구조

```text
mes-for-web/
  app.js                 # Express 서버 진입점
  package.json           # 프로젝트 설정 및 의존성

  src/
    config/
      database.js        # DB 연결 설정 및 풀 관리

    controllers/
      main.controller.js # 라우트별 비즈니스 로직 (req/resp 처리)

    dao/
      common.dao.js      # DB 공통 DAO, 쿼리 실행 로직
      mapper/
        main.xml         # SQL Mapper (쿼리 정의)

    middleware/          # (필요 시) 공통 미들웨어 위치

    routes/
      index.js           # 루트 라우터, 메인 라우터 등록
      main.route.js      # 메인 기능 관련 라우터 정의

    services/
      index.js           # 서비스 레이어 초기화/공용 함수
      main.services.js   # 도메인 비즈니스 로직 (DAO 호출)

    utils/
      jwt.util.js        # JWT 토큰 유틸리티

  view/
    main.ejs             # 메인 화면 템플릿
```

---

### 기본 데이터 흐름

1. **요청 수신 (`app.js` → `routes`)**
   - `app.js`에서 Express 앱을 생성하고, `src/routes/index.js`를 통해 하위 라우터(`main.route.js` 등)를 등록합니다.
   - 클라이언트가 HTTP 요청을 보내면, URL/메서드에 맞는 라우터로 요청이 전달됩니다.

2. **라우터 처리 (`routes` → `controllers`)**
   - 예: `/main` 같은 경로로 요청이 들어오면 `main.route.js`에서 해당 요청을 받아 `main.controller.js`의 컨트롤러 함수를 호출합니다.
   - 라우터는 주로 URL 매핑과 간단한 파라미터 전처리만 담당합니다.

3. **컨트롤러 로직 (`controllers` → `services`)**
   - 컨트롤러는 요청 파라미터 검증, 세션/JWT 체크 등의 작업을 수행한 후, 실제 비즈니스 로직이 담긴 `services` 레이어를 호출합니다.
   - 성공/실패 결과에 따라 EJS 렌더링 또는 JSON 응답을 반환합니다.

4. **비즈니스 로직 (`services` → `dao`)**
   - `main.services.js` 등에서 도메인에 맞는 로직을 처리하고, 데이터가 필요하면 `common.dao.js`를 통해 DB에 접근합니다.
   - 서비스 레이어는 트랜잭션 단위나 여러 DAO 호출을 조합해 처리하는 역할을 수행합니다.

5. **DB 접근 (`dao` → `mapper`)**
   - `common.dao.js`는 `database.js`에 설정된 커넥션/풀을 사용해 실제로 쿼리를 실행합니다.
   - 실행할 쿼리는 `src/dao/mapper/main.xml`에 정의된 SQL을 읽어서 사용합니다.

6. **응답 반환 (`services` → `controllers` → 클라이언트)**
   - DAO에서 받은 결과를 서비스에서 가공한 뒤 컨트롤러로 반환합니다.
   - 컨트롤러는 EJS 템플릿(`view/main.ejs`)을 렌더링하거나 JSON 형식으로 클라이언트에 응답합니다.

---

### 실행 방법 (예시)

```bash
# 의존성 설치
npm install

# 서버 실행
node app.js
```

필요하다면 `app.js`에 설정된 포트 번호와 DB 연결 설정(`src/config/database.js`)을 환경에 맞게 수정한 뒤 실행하면 됩니다.

---

### DB 설정 수정 안내

이 프로젝트를 처음 실행할 때는 **DB 접속 정보가 반드시 환경에 맞게 수정**되어야 합니다.

- **파일 위치**: `src/config/database.js`
- **수정해야 할 대표 항목 (예시)**:
  - `host` (DB 서버 주소)
  - `port` (DB 포트)
  - `user` / `password` (DB 계정 정보)
  - `database` (사용할 스키마/DB 이름)

로컬 개발 환경, 테스트 서버, 운영 서버 등 **환경별로 다른 설정이 필요하다면**, `.env` 파일이나 별도 설정 파일을 두고 `database.js`에서 이를 참조하는 방식으로 확장할 수 있습니다.


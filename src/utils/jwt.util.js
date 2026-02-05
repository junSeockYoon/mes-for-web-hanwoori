// JWT 토큰 생성 및 검증 유틸리티
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

/**
 * Access Token 발급
 * @param {number} userCd - 사용자 코드
 * @param {string} userType - 사용자 타입 ('user' | 'admin')
 * @returns {string} Access Token
 */
function generateAccessToken(userCd, userType) {
  const payload = {
    userCd,
    userType,
    type: 'access'
  };
  
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.accessExpiresIn
  });
}

/**
 * Refresh Token 발급
 * @param {number} userCd - 사용자 코드
 * @param {string} userType - 사용자 타입 ('user' | 'admin')
 * @returns {string} Refresh Token
 */
function generateRefreshToken(userCd, userType) {
  const payload = {
    userCd,
    userType,
    type: 'refresh'
  };
  
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.refreshExpiresIn
  });
}

/**
 * 토큰 검증
 * @param {string} token - JWT 토큰
 * @returns {object|null} 디코딩된 토큰 페이로드 또는 null (검증 실패 시)
 */
function verifyToken(token) {
  try {
    return jwt.verify(token, jwtConfig.secret);
  } catch (error) {
    // 토큰 만료, 잘못된 토큰 등
    return null;
  }
}

/**
 * 토큰 디코딩 (검증 없이)
 * @param {string} token - JWT 토큰
 * @returns {object|null} 디코딩된 토큰 페이로드 또는 null
 */
function decodeToken(token) {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  decodeToken
};

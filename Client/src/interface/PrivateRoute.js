import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ authenticated, component: Component }) => {
  if (!authenticated) {
    // 로그인되지 않은 사용자에게 Toast를 표시
    toast.error('로그인이 필요합니다.');

    // 로그인 페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }
  return <Component />;
};

export default PrivateRoute;

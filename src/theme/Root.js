import React from 'react';
import BackToTop from '@site/src/components/BackToTop';

// v1.8: 全站包裹层 —— 注入返回顶部按钮（每个 page 都有）
export default function Root({ children }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  );
}

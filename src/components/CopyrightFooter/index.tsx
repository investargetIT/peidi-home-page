/**
 * 版权信息组件
 * 展示网站底部的版权声明信息
 */
import './index.less';

export default function CopyrightFooter() {
  return (
    <div className="copyright-footer">
      {/* 版权文本信息 */}
      <div className="copyright-text">
        Copyright © 2018 佩蒂动物营养科技股份有限公司 All Rights Reserved.
      </div>
    </div>
  );
}

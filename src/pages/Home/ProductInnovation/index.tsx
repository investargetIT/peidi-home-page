/**
 * 产品创新组件
 * 展示公司的产品创新区域标题和了解更多按钮
 */
import { Button } from 'antd';
import './index.less';

/**
 * ProductInnovation组件属性接口
 * @interface ProductInnovationProps
 * @property {Function} onLearnMoreClick - 可选的"了解更多"按钮点击事件处理函数
 */
interface ProductInnovationProps {
  onLearnMoreClick?: () => void;
}

export default function ProductInnovation({ onLearnMoreClick }: ProductInnovationProps) {
  return (
    <div className="product-innovation-wrapper">
      <div className="product-innovation-container">
        {/* 产品创新标题 */}
        <h2 className="product-innovation-title">产品创新</h2>

        {/* 了解更多按钮 */}
        <Button
          className="product-innovation-button"
          onClick={onLearnMoreClick}
        >
          了解更多
        </Button>
      </div>
    </div>
  );
} 
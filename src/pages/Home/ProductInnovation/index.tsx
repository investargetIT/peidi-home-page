import { Button } from 'antd';
import './index.less';

interface ProductInnovationProps {
  onLearnMoreClick?: () => void;
}

export default function ProductInnovation({ onLearnMoreClick }: ProductInnovationProps) {
  return (
    <div className="product-innovation-wrapper">
      <div className="product-innovation-container">
        <h2 className="product-innovation-title">产品创新</h2>
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
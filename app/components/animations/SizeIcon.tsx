import React from 'react'
import { ProductSize } from '../../../types/Product';
import styles from "./SizeIcon.module.css";
import SmallSizeIcon from "@/public/s-white.svg";

interface SizeIconProps {
    size: ProductSize;
    isAnimated: boolean;
  }

  const SizeIcon: React.FC<SizeIconProps> = ({ size, isAnimated }) => {
    let SvgIcon;
  
    switch (size) {
      case ProductSize.Small:
        SvgIcon = SmallSizeIcon;
        break;
      case ProductSize.Medium:
        SvgIcon = SmallSizeIcon;
        break;
      case ProductSize.Large:
        SvgIcon = SmallSizeIcon;
        break;
      case ProductSize.ExtraLarge:
        SvgIcon = SmallSizeIcon;
        break;
      default:
        console.error('Error: No icon found for size:', size);
        return null;
    }
  
    return (
      <SvgIcon className={`${styles[`size-icon`]} ${isAnimated ? 'animated' : ''}`} />
    );
  };
export default SizeIcon;
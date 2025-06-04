import { CSSProperties } from "react";
import "./loader.scss"; 

interface LoadingButtonProps {
  isLoading: boolean;
  defaultText: string | any;
  loadingText?: string;
  className?: string;
  style?: CSSProperties;
  [key: string]: any; 
}

export const LoadingButton = ({
  isLoading = false,
  defaultText = "Submit",
  loadingText,
  className = "",
  style,
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      className={`loading-button ${className}`}
      style={style}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="button-loading-content">
            <span className="loading-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </span>
        </div>
      ) : (
        defaultText
      )}
    </button>
  );
};
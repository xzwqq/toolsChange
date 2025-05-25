import { CSSProperties } from "react";
import "./loader.scss"; // Подключаем стили

interface LoadingButtonProps {
  isLoading: boolean;
  defaultText: string;
  loadingText?: string;
  className?: string;
  style?: CSSProperties;
  [key: string]: any; // Для остальных пропсов кнопки
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
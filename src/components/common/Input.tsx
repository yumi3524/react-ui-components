

/**
 * 共通Inputコンポーネント
 * 
 * @example
 * ```tsx
 * const [value, setValue] = useState("");
 * 
 * <Input
 *   value={value}
 *   onChange={(e) => setValue(e.target.value)}
 *   placeholder="名前を入力"
 * />
 * ```
 */

export interface InputProps {
  /** 入力値 */
  value: string;
  /** 値変更時のハンドラ */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** プレースホルダー */
  placeholder?: string;
  /** input type（デフォルト: "text"） */
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
  /** 無効化 */
  disabled?: boolean;
  /** 必須入力 */
  required?: boolean;
  /** 追加のCSSクラス */
  className?: string;
  /** aria-label（アクセシビリティ） */
  "aria-label"?: string;
  /** 最大文字数 */
  maxLength?: number;
  /** オートフォーカス */
  autoFocus?: boolean;
}

export function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  required = false,
  className = "",
  maxLength,
  autoFocus = false,
  ...rest
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      autoFocus={autoFocus}
      className={`
        px-4 py-2 
        border border-gray-300 
        rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-gray-100 disabled:cursor-not-allowed
        placeholder:text-gray-400
        transition-all duration-200
        ${className}
      `}
      {...rest}
    />
  );
}

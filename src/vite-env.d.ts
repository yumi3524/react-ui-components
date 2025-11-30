/// <reference types="vite/client" />

// Raw imports のための型定義
declare module '*?raw' {
  const content: string;
  export default content;
}

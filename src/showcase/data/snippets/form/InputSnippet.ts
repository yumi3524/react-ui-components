/**
 * Input コンポーネントの使用例コード
 */
export const InputSnippet = `const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="入力してください"
/>`;

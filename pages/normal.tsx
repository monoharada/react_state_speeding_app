import { useState } from 'react';

const count = 10000;

const Test1 = ({ value }: { value: number }) => (
  <div>
    <div>Test1</div>
    {new Array(count).fill(0).map((_, index) => (
      <div key={index}>{value}</div>
    ))}
  </div>
);

const Test2 = ({ value }: { value: number }) => (
  <div>
    <div>Test2</div>
    {new Array(count).fill(0).map((_, index) => (
      <div key={index}>{value}</div>
    ))}
  </div>
);

const Test3 = () => (
  <div>
    <div>Test3</div>
    {new Array(count).fill(0).map((_, index) => (
      <div key={index}>Test3</div>
    ))}
  </div>
);

const Input = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => <button onClick={() => setValue((v) => v + 1)}>+1</button>;

const Normal = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div>通常</div>
      <Input setValue={setValue} />
      <hr />
      <div style={{ display: 'flex' }}>
        <Test1 value={value} />
        <Test2 value={value} />
        <Test3 />
      </div>
    </>
  );
};
export default Normal;

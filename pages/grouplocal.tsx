import {
  LocalState,
  mutateLocalState,
  useLocalState,
  useLocalStateCreate,
} from '@react-libraries/use-local-state';

const count = 10000;

const Test1 = ({ state }: { state: LocalState<number> }) => {
  const [value] = useLocalState(state);
  return (
    <div>
      <div>Test1</div>
      {new Array(count).fill(0).map((_, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

const Test2 = ({ state }: { state: LocalState<number> }) => {
  const [value] = useLocalState(state);
  return (
    <div>
      <div>Test2</div>
      {new Array(count).fill(0).map((_, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

const Test3 = () => (
  <div>
    <div>Test3</div>
    {new Array(count).fill(0).map((_, index) => (
      <div key={index}>Test3</div>
    ))}
  </div>
);

const Input = ({ state }: { state: LocalState<number> }) => (
  <button onClick={() => mutateLocalState(state, (v) => v + 1)}>+1</button>
);

const GroupLocal = () => {
  const state = useLocalStateCreate(0);
  return (
    <>
      <div>LocalState</div>
      <Input state={state} />
      <hr />
      <div style={{ display: 'flex' }}>
        <Test1 state={state} />
        <Test2 state={state} />
        <Test3 />
      </div>
    </>
  );
};

export default GroupLocal;

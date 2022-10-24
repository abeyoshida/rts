import { Child, ChildAsFC } from './Child';

export const Parent = () => {
  return (
    <div>
      <div>Child: <Child color="red" onClick={() => console.log('click')} /></div>
      <div>ChildAsFC: <ChildAsFC color="orange" onClick={() => console.log('clack')} /></div>
    </div>
  );
};

export default Parent;

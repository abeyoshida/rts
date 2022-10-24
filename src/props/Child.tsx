interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

/**
 * In order to tell Typescript that we are defining a React component
 * we can use the following syntax when declaring a prop type.
 */
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  )
};


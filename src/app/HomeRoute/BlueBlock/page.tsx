interface Props {
  prop: string;
}

const BlueBlock = ({ prop }: Props) => {
  console.log(prop);
  // can still accept props regularly
  return <div className="BlueBlock">{prop ? prop : "goodbye"}</div>;
  // if the component can be rendered through it's own route as shown in HomeRoute/layout.tsx:15 then you have to account for it not being there
};

export default BlueBlock;

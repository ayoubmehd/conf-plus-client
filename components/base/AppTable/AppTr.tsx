type Props = {
  children: React.ReactNode;
};

const AppTr: React.FC<Props> = (props) => {
  return <tr className="border-b">{props.children}</tr>;
};

export default AppTr;

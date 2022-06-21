type Props = {
  children: React.ReactNode;
};

const AppTBody: React.FC<Props> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default AppTBody;

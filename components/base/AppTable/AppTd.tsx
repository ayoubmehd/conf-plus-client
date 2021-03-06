type Props = {
  children: React.ReactNode;
};

const AppTd: React.FC<Props> = (props) => {
  return (
    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
      {props.children}
    </td>
  );
};

export default AppTd;

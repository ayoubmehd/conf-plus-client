import dynamic from "next/dynamic";

type Options = { iconName: string | undefined };

export default ({ iconName }: Options) => {
  const Icon = dynamic(() => import(`../../components/icons/${iconName}.svg`));

  return <Icon />;
};

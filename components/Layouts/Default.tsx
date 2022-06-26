import type { ReactElement } from "react";

type LayoutPropsType = { children: ReactElement };

function Default({ children }: LayoutPropsType) {
  return <>{children}</>;
}

export default Default;

import AppTBody from "./AppTBody";
import AppTd from "./AppTd";
import AppTr from "./AppTr";

type Props = {
  children: React.ReactNode;
  headings: React.ReactNode;
};

const AppTable: React.FC<Props> = ({ children, headings }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-gray-50 rounded shadow">
            <table className="min-w-full">
              <thead>
                <tr>{headings}</tr>
              </thead>
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AppTBody, AppTd, AppTr };

export default AppTable;

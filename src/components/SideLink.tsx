import classNames from "classnames";

export interface SideLinkProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const SideLink: React.FC<SideLinkProps> = ({
  id,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <>
      <div
        className={classNames('h-14 w-full flex items-center bg-blue-600', {"bg-blue-400" : isSelected})}
        onClick={() => {
          onClick(id);
        }}
      >
        {label}
      </div>
    </>
  );
};


export default SideLink;
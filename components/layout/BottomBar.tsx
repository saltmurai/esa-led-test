import { AiOutlineSave, AiOutlineFileText } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const ICON_SIZE = 20;

export default function BottomBar() {
  const buttons = [
    {
      name: "Save",
      hanlder: () => {},
      icon: <AiOutlineSave size={ICON_SIZE} />,
    },
    {
      name: "Delete",
      hanlder: () => {},
      icon: <BsTrash size={ICON_SIZE} />,
    },
    {
      name: "Use",
      hanlder: () => {},
      icon: <AiOutlineFileText size={ICON_SIZE} />,
    },
    {
      name: "Cancel",
      hanlder: () => {},
      icon: <MdOutlineCancel size={ICON_SIZE} />,
    },
  ];
  return (
    <div className="h-16 w-100 justify-self-end bg-white flex justify-around items-center">
      {buttons.map((button, index) => (
        <div key={index} className="btn">
          {button.icon}
          <div className="ml-2">{button.name}</div>
        </div>
      ))}
    </div>
  );
}

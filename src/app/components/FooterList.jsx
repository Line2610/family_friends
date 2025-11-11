import { FaRegStar } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

export default function FooterList() {
  return (
    <ul className="flex flex-wrap justify-center gap-15 bg-white/20 pt-5 pb-5">
      <li>
        <FiHome className="h-7 w-7 text-gray-500" />
      </li>
      <li>
        <FaRegStar className="h-7 w-7 text-gray-500" />
      </li>
      <li>
        <FiMessageCircle className="h-7 w-7 text-gray-500" />
      </li>
      <li>
        <FiUser className="h-7 w-7 text-gray-500" />
      </li>
    </ul>
  );
}

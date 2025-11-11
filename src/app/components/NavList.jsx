import { IoIosNotificationsOutline } from "react-icons/io";

const NavList = () => {
  return (
    <ul className="gap-pt-5 mt-5 mr-5 ml-5 flex justify-between pt-5 pb-5">
      <li>
        <h1 className="font-semibold">FamilyFriends</h1>
      </li>
      <li>
        <IoIosNotificationsOutline className="h-7 w-7" />
      </li>
    </ul>
  );
};

export default NavList;

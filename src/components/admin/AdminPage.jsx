import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import "./style.css";
import { Input } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import data from "../../utils/data";

const AdminPage = () => {
  const [ham, setHam] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  
  const handleDrawerToggle = () => {
    setHam(!ham);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    console.log(item.title)
  };

  return (
    <div className="admin-container">
      <div className="navbar">
        <div className="logo">
          <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png" alt="" />
          <p className="logoName">NiceAdmin</p>
        </div>
        <div className="search">
          <div className="left">
            {ham ? (
              <RxCross1 size={'2rem'} cursor={'pointer'} onClick={handleDrawerToggle} />
            ) : (
              <RxHamburgerMenu size={'2rem'} cursor={'pointer'} onClick={handleDrawerToggle} />
            )}
            <Input w={'20rem'} mt={-1} border={'1px solid black'} placeholder="search" />
          </div>
          <div className="right">
            <IoIosNotificationsOutline size={'2rem'} cursor={'pointer'} />
            <MdOutlineMessage size={'2rem'} cursor={'pointer'} />
            <p>K Anderson ▾</p>
          </div>
        </div>
      </div>
      <div className="admin_main">
        {ham && (
          <div className={`drawer ${ham ? 'open' : ''}`}>
            {data.map((item, idx) => (
              <div key={idx} className="single_menu" onClick={() => handleMenuItemClick(item)}>
                <div>
                  <div>{item.icon}</div>
                  <p>{item.title}</p>
                </div>
                <div className="down_arrow">
                  <FaChevronDown size={'1.5rem'} color="gray" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="content">
          {selectedItem ? selectedItem.content : <div>Select a menu item</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

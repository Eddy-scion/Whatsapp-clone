import "./sidebarRooms.css";

const SidebarRooms = (props) => {
  const year = new Date(props.createdAt * 1000).getFullYear();
  const month = new Date(props.createdAt * 1000).getMonth();
  const day = new Date(props.createdAt * 1000).getDay();

  return (
    <div className="sidebar-rooms">
      <div className="circle" style={{ background: props.color }}>
        {props.firstLetter}
      </div>
      <div className="rooms">
        <b>{props.roomName}</b>
        <br />
        <p>
          {year}-{month}-{day}
        </p>
      </div>
    </div>
  );
};

export default SidebarRooms;

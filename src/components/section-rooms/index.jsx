import { memo } from "react";
import PropTypes from "prop-types";
import RoomItem from "@/components/room-item/index";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;

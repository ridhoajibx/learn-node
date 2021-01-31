import React from 'react'
import Room from './Room';

const RoomList = (props) => {
    const { rooms } = props;
    return (
        <>
            {rooms &&
                rooms.map((room) => (
                    <Room key={room._id} name={room.name} />
                ))
            }
        </>
    )
}

export default RoomList

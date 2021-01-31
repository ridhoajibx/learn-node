import React from 'react'

const Room = (props) => {
    const { name } = props;
    return (
        <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-content">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Room

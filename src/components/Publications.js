import React from "react";

const Publication = (prop) => {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="avatar">{prop.avatar}</div>
                <div className="info-wrapper">
                <div className="main-wrapper">
                <span className="name">{prop.name}</span>
                <span className="nickname">{prop.nickname}</span>
                <span className="date">{prop.date}</span>
                </div>
                <span className="descr">{prop.content}</span>
                </div>
            </div>
            <div className="img">{prop.image}</div>
            </div>

    )

}

export default Publication;
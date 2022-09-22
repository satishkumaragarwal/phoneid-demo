import React from "react";

export function MailListItem(props){
    return (
        <div className="card">
            <div class="card-body">
                <h5 class="card-title text-primary">{props.title}</h5>
                <div className="row"><span className="text-info col-9">{props.sender}</span> <span className="text-info col-3">{props.time}</span></div>
                <div className="card-text text-secondary">{props.previewText}</div>
            </div>
        </div>
    );
}
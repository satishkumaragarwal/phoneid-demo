import React from "react";
import {MailListItem} from './MailListItem';
import {FooterItem} from './FooterItem';
import { useNavigate } from 'react-router-dom';

export function MailHome() {
    const mock= [
        {
            title: "Hello",
            sender: "John",
            time: "12:00",
            previewText: "Hello, how are you?"
        },
        {
            title: "Hello",
            sender: "John",
            time: "12:00",
            previewText: "Hello, how are you?"
        },
        {
            title: "Hello",
            sender: "John",
            time: "12:00",
            previewText: "Hello, how are you?"
        },
    ];

    const navigate = useNavigate();

    const onCompose = () => {
        navigate('compose');
    };
    return (
        <div className="dflex">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mail</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            {/* <ul class="list-group">
                <MailListItem 
                    className="list-group-item"
                    sender={mock[0].sender}
                    time={mock[0].time}
                    previewText={mock[0].previewText}
                    title={mock[0].title} />
                <MailListItem
                    className="list-group-item"
                    sender={mock[1].sender}
                    time={mock[1].time}
                    previewText={mock[1].previewText}
                    title={mock[1].title} />
                <MailListItem
                    className="list-group-item"
                    sender={mock[2].sender}
                    time={mock[2].time}
                    previewText={mock[2].previewText}
                    title={mock[2].title} />

            </ul> */}
            <span className="rounded-circle fs-1 p-3 text-bg-primary float-end" onClick={onCompose}>+</span>
            {/* <FooterItem />  */}
        </div>
    );
}

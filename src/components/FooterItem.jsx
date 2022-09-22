import React from 'react';

export function FooterItem(props) {
    return (
        <div class="container p-0 btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Mail</button>
            <button type="button" class="btn btn-primary">Calendar</button>
            <button type="button" class="btn btn-primary">People</button>
        </div>
    );
}
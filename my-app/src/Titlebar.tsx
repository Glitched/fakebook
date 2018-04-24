import * as React from 'react';

class Titlebar extends React.Component {
    public render() {
        return (
            <header>
                <nav>
                    <h1>
                        <a href="/">fakebook</a>
                    </h1>
                    <a href="/profile/cjgdtf2p7v1xp012750gz9ujk" className="smallCaps profile">My Profile</a>
                </nav>
            </header>
        );
    }
}

export default Titlebar;

import React, {Component} from 'react'

class Profile extends Component {

    render () {
        return (
            <div>
                <header>
                    <h1>Profile!</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Profile
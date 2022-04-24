import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};
        
        // send data to the server
        fetch('', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
        })
    }
    return (
        <div>
            <h2>please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' />  <br />
                <input type="text" name='email' placeholder='Email' /> <br />
                <input type="submit" value="Add User" />  
            </form>
        </div>
    );
};

export default AddUser;
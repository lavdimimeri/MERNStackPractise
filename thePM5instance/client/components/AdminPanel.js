import React, { useState } from 'react'

const AdminPanel = (theUsers, loggedUser, userInFocus, panel, loggedIn, isAdmin, username, 
    errorMessages, errorMessagesReg, errorMessagesCre, errorMessagesEdi, errorMessagesDel, isSubmitted,
    setUserInFocus, setPanel, setErrorMessages, setErrorMessagesReg, setErrorMessagesCre, setErrorMessagesEdi, 
    setErrorMessagesDel, setIsSubmitted, database) => {

        //========== SWITCHING PANELS MECHANISM STARTS HERE ================================
    //A super cool mechanism that "changes" pages, (panels) while we are in the same page.

    async function loadTheUsers() {
        //loading the users
        if(theUsers.length == 0){
          database.map(obj => {
            theUsers.push({username: obj.username,
            password: obj.password,
            admin: obj.admin});
            });
        
        } //end  if(theUsers.length == 0)
    }
  
  
      async function goToIndex() {
        loadTheUsers();
          setPanel("index");
          document.title = "Welcome to " + panel; //setting the title
      }
      
      async function goToLogin() {
        loadTheUsers();
        if(!loggedIn){
          setPanel("login");
        } else {
          setPanel("index");
        }
        document.title = "Welcome to " + panel; //setting the title
      }
  
      async function goToRegistration() {
        loadTheUsers();
        if(!loggedIn){
          setIsSubmitted(false);
          setPanel("registration");
        } else {
          setPanel("index");
        }
        document.title = "Welcome to " + panel; //setting the title
      }
  
      //we will probably not use that.
      async function goToUserDashboard() {
          loadTheUsers();
          setPanel("dashboard");
          document.title = "Welcome to " + panel; //setting the title
      }
  
      async function goToAdminPanel() {
        if(isAdmin){
          loadTheUsers();
  
          setPanel("adminpanel");
        } else {
          setPanel("index");
        }
        document.title = "Welcome to " + panel; //setting the title
      }
  
      async function goToCreateUser() {
        loadTheUsers();
        if(isAdmin){
          setPanel("createuser");
        } else {
          setPanel("index");
        }
        document.title = "Welcome to " + panel; //setting the title
      }
  
      async function goToEditUser() {
        loadTheUsers();
        if(isAdmin){
          setPanel("edituser");
        } else {
          setPanel("index");
        }
        document.title = "Welcome to " + panel; //setting the title
      }
  
      async function goToDeleteUser() {
        loadTheUsers();
        if(isAdmin){
          setPanel("deleteuser");
        } else {
          setPanel("index");
        }
        document.title = "Welcome to " + panel; //setting the title
      }
      //========== SWITCHING PANELS MECHANISM ENDS HERE ==================================


    
    

    
    return (
        <div>
        <h1>This will be the Admin panel!</h1>
        <h3>Temportary Display of the Users</h3>
            <ol>
            {theUsers.theUsers!=null ? theUsers.theUsers.map((item) => <li>{item.username} </li>):""}
            </ol>
            <h2 style={{display: isAdmin ? 'none' : 'inline'}}>Dafug Are you doing here man?</h2>
            <p style={{display: isAdmin ? 'inline' : 'none'}}>Displaying a few users... blah... blah... </p>
            <p>The isAdmin value is: {isAdmin}</p>
            <br />
            <button onClick={goToCreateUser} style={{display: isAdmin ? 'inline' : 'none'}}>Create User</button>
            <button onClick={goToEditUser} style={{display: isAdmin ? 'inline' : 'none'}}>Edit User</button>
            <button onClick={goToDeleteUser}style={{display: isAdmin ? 'inline' : 'none'}}>Delete User</button>
        </div>
    )

}

export default AdminPanel
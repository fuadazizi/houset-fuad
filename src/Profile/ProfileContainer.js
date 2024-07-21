import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileAccount from './ProfileAccount/ProfileAccount'
// import './assets/style/profile-account.css'
import ProfileTransaction from './ProfileTransactions/ProfileTransaction'
import ProfileNotification from './ProfileNotification/ProfileNotification'

export default function ProfileContainer({activeSidebar,activeDropdown,userData,setUserData}) {
  // function to return what container should be shown 

  switch (activeSidebar) {
    case 1:
      // Pesanan saya akan ditampilkan 
      return(
        <Container className="profile-container p-0">
           <ProfileTransaction />
        </Container>
      )
    case 2:      
      // notifikasi settings akan ditampilkan 
      return(
        <Container className="profile-container p-0">
          <ProfileNotification />
        </Container>
      )
    case 3:
      // wishlist akan ditampilkan 
      return(
        <Container className="profile-container p-0">
          {/* Wishlist */}
        </Container>
      )
    default:
      // akun saya akan ditampilkan 
      return (
        <Container className="profile-container p-0" >
          <ProfileAccount activeDropdown={activeDropdown} userData={userData} setUserData={setUserData}/>         
        </Container>
      )
  }


}


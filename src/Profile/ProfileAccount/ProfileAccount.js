import ProfileInfo from "./ProfileInfo";
import ProfileAddress from "./ProfileAddress";
import UpdatePassword from "./UpdatePassword";

import "./assets/style/profile-account.css"

export default function ProfileAccount({ activeDropdown,userData,setUserData }) {
  switch (activeDropdown) {
    case 1:
      // Daftar alamat will be shown
      return  <ProfileAddress userData={userData} setUserData={setUserData}/>
    case 2:
      // Ubah Password will be shown
      return <UpdatePassword userData={userData} setUserData={setUserData}/>
    default:
      // profil saya will be shown
      return <ProfileInfo userData={userData} setUserData={setUserData}/>
  }
}

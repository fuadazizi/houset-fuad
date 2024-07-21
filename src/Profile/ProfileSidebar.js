import './assets/style/profile-sidebar.css'
import { HomeIcon,NoteIcon,NotificationIcon,WishlistIcon } from './assets/Icon'

export default function ProfileSidebar({activeSidebar,setActiveSidebar,activeDropdown,setActiveDropdown}) {
    

    const DropdownSidebar = () => {
        // function to return when akun saya is active
        if (activeSidebar === 0) {
            return(
                <ul>
                    <li className={activeDropdown === 0 ? "active" : ""} onClick={() => setActiveDropdown(0)}>Profil Saya</li>
                    <li className={activeDropdown === 1 ? "active" : ""} onClick={() => setActiveDropdown(1)}>Daftar Alamat</li>
                    <li className={activeDropdown === 2 ? "active" : ""} onClick={() => setActiveDropdown(2)}>Ubah Password</li>
                </ul>
            )
        }
        else {
            return null
        }
    }


    return(
        <ul>
            <li className={activeSidebar === 0 ? "active" : ""} onClick={() => setActiveSidebar(0)}>
                <button><HomeIcon /><p>Akun Saya</p></button>
                {<DropdownSidebar />}
            </li>
            <li className={activeSidebar === 1 ? "active" : ""} onClick={() => setActiveSidebar(1)}>
                <button><NoteIcon /><p>Pesanan Saya</p></button>            
            </li>
            <li className={activeSidebar === 2 ? "active" : ""} onClick={() => setActiveSidebar(2)}>
                <button><NotificationIcon /><p>Notifikasi</p></button>                            
            </li>
            <li className={activeSidebar === 3 ? "active" : ""} onClick={() => setActiveSidebar(3)}>
                <button><WishlistIcon /><p>Wishlist</p></button>            
            </li>
        </ul>
    )
}
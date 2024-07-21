import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { Container, Col, Row } from 'react-bootstrap'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import ProfileSidebar from './ProfileSidebar'
import './assets/style/profile.css'
import ProfileContainer from './ProfileContainer'
import data from './data.json'
import useAuth from '../hooks/useAuth'

function Profile() {
  // state for set the active sidebar for container
  const [activeSidebar, setActiveSidebar] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState(0)
  const [userData, setUserData] = useState({})

  const { getToken } = useAuth();
  const USER_URL = '/public/api/user/me'

  useEffect(() => {
    const getUserData = async () => {
      await axios
        .get(USER_URL, { headers: { "Authorization": `Bearer ${getToken()}` } })
        .then(res => setUserData(res?.data?.data))
        .catch((err) => {
          if (!err?.response) {
            console.log("No Server Response");
          } else if (err.response?.status === 401) {
            alert("Session ended");
          }
        })
    }
    getUserData();
    return () => {
      setUserData({});
    };
  }, []);
  console.log(userData);

  return (
    <>
      <NavigationBar />
      <Container className='profile-page p-0'>
        <Row>
          <Col className="profile-sidebar" xs="auto">
            <ProfileSidebar
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              activeSidebar={activeSidebar}
              setActiveSidebar={setActiveSidebar}
            />
          </Col>
          <Col>
            <ProfileContainer
              activeSidebar={activeSidebar}
              activeDropdown={activeDropdown}
              userData={userData}
              setUserData={setUserData}
            />
          </Col >
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Profile
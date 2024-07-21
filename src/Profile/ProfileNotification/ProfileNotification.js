import React from "react";
import "./assets/style/profile-notification.css";


const NotificationBuilderComponent = ({ type, data }) => {
  // component for notification based on type 
  switch (type) {
    case "Complete Payment":
      return (
        <div className="profile-notification-card">
          <div className="notification-header">
            <h2 className="notification-header-title">
              Selesaikan pembayaran Anda
            </h2>
            <h4 className="notification-header-date">
              {"24 Juni 2022, 12:15 WIB"}
            </h4>
          </div>
          <div className="notification-body">
            <p className="notification-message">
              Hai {"name"}, pesanan kamu sebesar Rp{" "}
              <strong>{"total pembayaran"}</strong> dengan kode pembayaran{" "}
              <strong>{"kode pembayaran"}</strong> ke{" "}
              <strong>{"metode pembayaran"}</strong> belum dibayar. Silakan
              lakukan pembayaran sebelum tanggal{" "}
              <strong>{"batas waktu pembayaran"}</strong>.
            </p>
          </div>
        </div>
      );
    case "Give Rating":
      return (
        <div className="profile-notification-card active">
          <div className="notification-header">
            <h2 className="notification-header-title">
              Pesananmu telah selesai, kasih penilaian yukk!
            </h2>
            <h4 className="notification-header-date">{"3 Maret  2022, 10:15 WIB"}</h4>
          </div>
          <div className="notification-body">
            <p className="notification-message">
              Pesanan Anda [{"kode pesanan"}] telah sampai di tujuan pada
              tanggal <strong>{"package date"}</strong>. Mohon konfirmasi terima
              pesanan dan beri penilaian ke Houset.
            </p>
          </div>
        </div>
      );
    default:
      break;
  }
};

export default function ProfileNotification() {
  const setAllNotificationToRead = () => {
    console.log("all notification is read");
  };

  return (
    <>
      <div className="profile-container-header notification">
        <h1 className="header-title">Notifikasi</h1>
        <button className="button-read-all" onClick={setAllNotificationToRead}>
          Tandai sebagai sudah dibaca
        </button>
      </div>
      <div className="profile-container-body notification">
        {/* looping from data */}
        <NotificationBuilderComponent type={"Complete Payment"} />
        <NotificationBuilderComponent type={"Give Rating"} />
        <NotificationBuilderComponent type={"Complete Payment"} />
        <NotificationBuilderComponent type={"Give Rating"} />
      </div>
    </>
  );
}

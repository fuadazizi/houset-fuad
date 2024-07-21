import React from "react";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

import "./assets/style/profile-transaction.css";

import ProductTransaction from "./ProductTransaction";

const FilterTransactionButton = ({ filterTransaction, setFilterTransaction, setIsEmpty, }) => {
  // filter component bar based on status
  const availableFilters = [
    "Semua",
    "Pending",
    "Berlangsung",
    "Selesai",
    "Dibatalkan",
  ];

  return (
    <div className="filter-transaction">
      {availableFilters.map((filter, i) => {
        return (
          <button
            key={i}
            onClick={() => { 
              setFilterTransaction(filter);
              setIsEmpty(false);
            }}
            className={`filter-button ${filterTransaction === filter ? "active" : ""}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default function ProfileTransaction() {
  const [filterTransaction, setFilterTransaction] = useState("Semua");
  const [userTransactions, setUserTransactions] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const { getToken } = useAuth();
  const TRANSACTION_URL = '/public/api/transaction/my-transaction'

  useEffect(() => {
    const getTransaction = async () => {
      await axios
        .get(TRANSACTION_URL, { headers: { "Authorization": `Bearer ${getToken()}` } })
        .then(res => setUserTransactions(res?.data
          .filter(product => product.status === filterTransaction || filterTransaction === "Semua")))
        // .then(setIsEmpty(false))
        .catch((err) => {
          if (!err?.response) {
            console.log("No Server Response");
          } else if (err.response?.status === 401) {
            alert("Wrong input");
          }
        })
    }

    getTransaction();
    return () => {
      setUserTransactions([]);
    };
  }, [filterTransaction]);

  useEffect(() => {
    setTimeout(() => {
      setIsEmpty(true);
    }, 5000)
  },[isEmpty])

  return (
    <>
      <div className="profile-container-header">
        <h1 className="header-title">Pesanan Saya</h1>
      </div>
      <div className="profile-container-body transaction">
        <FilterTransactionButton 
          filterTransaction={filterTransaction} 
          setFilterTransaction={setFilterTransaction} 
          // handleIsEmpty={handleIsEmpty} 
          setIsEmpty={setIsEmpty}
        />
        <div className="transaction-product-card-list">
          {
            userTransactions.length !== 0 ?
              userTransactions.map((transaction, i) => {
                return <ProductTransaction transaction={transaction} key={i} />;
              }) : isEmpty ?
                <p> Tidak ada data transaksi </p>
                : <p> Sedang mengambil data... </p>
          }
        </div>
      </div>
    </>
  );
}


import { useState, useEffect } from "react";
import axios from "../../api/axios";

import Button from "../../Components/Button";
import PriceFormatter from "../../Components/PriceFormatter"

import housetLogo from "../../assets/image/houset-logo2.png";
import { LocalShippingIcon, StarRateIcon } from "../assets/Icon";

const ProductTransactionDetails = ({ detail }) => {
    const [detailProduct, setDetailProduct] = useState({});
    const baseImage = "https://houset.my.id/storage/app/public/";
    const [productImage, setProductImage] = useState("")

    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`/public/api/product/${detail.id_product}`, {})
                .then((res) => {
                    setDetailProduct(res.data?.data);
                })
                .catch((error) => console.log(error));
        };
        getData();
        // setIsReady(true);
        return () => {
            setDetailProduct({});
        };
    }, [detail.id_product])

    useEffect(() => {
        if (Object.keys(detailProduct).length != 0) {
            const indexPicture = detailProduct.variant.findIndex((object) => object.color == detail.color);
            setProductImage(detailProduct.variant[indexPicture].image_gallery[0].location);
        }
    }, [detailProduct])

    return (
        <div className="transaction-product">
            <div className="transaction-product-item">
                <div className="transaction-product-image">
                    <img src={baseImage + productImage} alt="image not found" />
                </div>
                <div className="transaction-product-details">
                    <h5 className="transaction-product-name">{detailProduct.name}</h5>
                    <h5 className="transaction-product-price">
                        {detail.quantity} barang x <PriceFormatter value={detail.price} />
                    </h5>
                </div>
            </div>
            <div className="transaction-product-total-price">
                <p> <PriceFormatter value={detail.quantity * detail.price} /> </p>
            </div>
        </div>
    );
};

export default function ProductTransaction({ transaction }) {

    const PackageStatus = ({ status, name }) => {
        switch (status) {
            case "shipped":
                return (
                    <div className="shipped">
                        <LocalShippingIcon />
                        <p>Paket telah diterima {name}</p>
                    </div>
                );

            default:
                return null;
        }
    };

    // const products = transaction.product;
    return (
        <div className="transaction-product-card">
            <div className="transaction-header">
                <div className="transaction-header-left">
                    <img src={housetLogo} alt="houset" width={"115px"} />
                    <p className="transaction-info-date">{transaction.date}</p>
                    <label className={"transaction-status pending"}>{transaction.status}</label>
                </div>
                <div className="transaction-header-right">
                    <PackageStatus status={transaction.paketStatus} name={transaction.paketName} />
                </div>
            </div>
            <div className="transaction-products">
                {
                    transaction !== undefined ?
                        transaction.details.map((detail, i) => {
                            return <ProductTransactionDetails detail={detail} key={i} />;
                        }) : ""
                }
            </div>
            <div className="transaction-footer">
                <div className="transaction-footer-price">
                    <h5>Total Pesanan</h5>
                    <h5> <PriceFormatter value={transaction.total_amount} /> </h5>
                </div>
                <div className="transaction-footer-action">
                    <div className="transaction-action-rating">
                        <Button text="Beri Penilaian" type={'action-button'} />
                        {/* {transaction.rating ? (
                <>
                  <StarRateIcon />
                  <p>Penilaian anda telah dikirm</p>
                </>
              ) : (
                <Button text="Beri Penilaian" type={'action-button'} />
              )} */}
                    </div>
                    <div className="transaction-action">
                        <Button text="Hubungi Penjual" type={'action-button'} />
                        <Button text="Beli Lagi" type={'primary-button'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

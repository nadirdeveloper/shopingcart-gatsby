import React from "react"
import Layout from '../components/layout';
import styles from '../styles/home.module.css';
export default function Home() {
  return (
    <Layout>
      <div className={styles.banner}>
      <h1 className={styles.bannerh1}>Welcome to Shopping Gatsby</h1>
      </div>
      <div className={styles.mainDiv}>
        <h1><span>Products</span></h1>
        <div className={styles.mainContent}>
        </div>
      </div>
    </Layout>
  );
}
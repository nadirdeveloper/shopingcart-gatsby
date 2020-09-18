import React from 'react';
import Header from './header';
import { ProductProvider } from "../context/context";

export default function Layout({children}) {
    return (
<ProductProvider>
<div style={{ margin: `4rem 0`,Width:'100%' }}>
            <Header />
      {children}
      </div>
</ProductProvider>
    )
}

import React from "react";

const ProductPageLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <header>Product Page</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
};

export default ProductPageLayout;

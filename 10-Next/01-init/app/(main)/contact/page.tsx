import Link from "next/link";

const ContactPage = () => {
    return (
        <div>
            <Link href={"/about"}>Go to About</Link>
            <br />
            <Link href={"/products/1"}>Go to Product 1</Link>
            <br />
            <Link href={{ pathname: "/about", query: { name: "gautam" } }}>
                Nav With Query Param
            </Link>
            <div>ContactPage</div>
        </div>
    );
};

export default ContactPage;

import Image from "next/image";

const DemoPage = () => {
    return (
        <div>
            Demo Image
            <div>
                <Image
                    src={
                        "https://images.pexels.com/photos/18872916/pexels-photo-18872916.jpeg"
                    }
                    width={200}
                    height={200}
                    alt="Image of nature."
                />
            </div>
            <div>
                <Image
                    src={"/undraw_idea-to-plan_jnei.svg"}
                    width={200}
                    height={200}
                    alt="An SVG of idea to work."
                />
            </div>
        </div>
    );
};

export default DemoPage;

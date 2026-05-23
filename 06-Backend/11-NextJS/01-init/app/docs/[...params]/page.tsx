const Docs = async ({ params }: { params: Promise<{ params: string[] }> }) => {
    const { params: sub_urls } = await params;
    return (
        <>
            <div>Docs</div>
            <p>URL Params: {sub_urls.join(", ")}</p>
        </>
    );
};

export default Docs;

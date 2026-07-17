const DynamicDocsPage = async ({params}: {params: Promise<{slug: string[]}>}) => {
  const {slug} = await params
  return (
    <div>DynamicDocsPage: {slug.join('/')}</div>
  )
}

export default DynamicDocsPage;

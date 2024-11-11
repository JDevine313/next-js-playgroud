interface Params {
  params: Promise<{ potato: string }>;
}

export default async function Slug({ params }: Params) {
  const potato = (await params).potato;
  return <div>My Post: {potato}</div>;
}

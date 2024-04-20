import Link from "next/link"

type Params = {
  params: {
    breed: string
    id: string
  }
}

export default async function DogDetailPage ({ params }: Params) {
  return (
    <section>
      <ul className="mb-4">
        <li>Breed: {params.breed}</li>
      </ul>
      <div className="mb-6">
        <img src={`https://images.dog.ceo/breeds/${params.breed}/${params.id}.jpg`} alt={params.breed} />
      </div>
      <Link href="/" className="underline text-indigo-600">← back to top page</Link>
    </section>
  )
}

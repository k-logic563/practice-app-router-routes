type Params = {
  params: {
    breed: string
    id: string
  }
}

export default async function DogDetailPage ({ params }: Params) {
  return (
    <section>
      <h1 className="font-bold text-xl mb-4">Dog Detail</h1>
      <ul className="mb-4">
        <li>Breed: {params.breed}</li>
      </ul>
      <img src={`https://images.dog.ceo/breeds/${params.breed}/${params.id}.jpg`} alt="" />
    </section>
  )
}

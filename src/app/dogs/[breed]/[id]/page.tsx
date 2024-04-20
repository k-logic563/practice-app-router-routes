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
      <img src={`https://images.dog.ceo/breeds/${params.breed}/${params.id}.jpg`} alt="" />
    </section>
  )
}

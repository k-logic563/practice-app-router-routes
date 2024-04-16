import Link from "next/link";

type DogProps = {
  message: string[]
  status: 'success' | 'error'
}

type FormatDogProps = {
  url: string
  breed: string
  id: string
}

const formatDogProps = (dogImages: string[]): FormatDogProps[] => {
  return dogImages.map(imageUrl => {
    const splitUrl = imageUrl.split('/');
    const breed = `${splitUrl.at(-2)}`
    const id = `${splitUrl.at(-1)}`.replace('.jpg', '')
    return {
      url: imageUrl,
      breed,
      id
    }
  })
}

export default async function DogsPage () {
  const dogs = await fetch ('https://dog.ceo/api/breeds/image/random/12');
  const body = await dogs.json() as DogProps;
  const formatDogItems = formatDogProps(body.message)
  return (
    <section>
      <h1 className="font-bold text-xl mb-4">Dog list</h1>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
        { formatDogItems.map(item => (
          <li key={item.id}>
            <Link href={`dogs/${item.breed}/${item.id}`} className="hover:opacity-60">
              <img src={item.url} alt="" />
            </Link>
          </li>
        )) }
      </ul>
    </section>
  )
}

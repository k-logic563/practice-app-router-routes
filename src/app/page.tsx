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
  const dogs = await fetch ('https://dog.ceo/api/breeds/image/random/24');
  const body = await dogs.json() as DogProps;
  const formatDogItems = formatDogProps(body.message)
  return (
    <section>
      <ul className="columns-2 sm:columns-3 lg:columns-4">
        { formatDogItems.map(item => (
          <li key={item.id} className="mb-4">
            <Link href={`dogs/${item.breed}/${item.id}`} className="hover:opacity-60">
              <img className="rounded-lg" src={item.url} alt="" />
            </Link>
          </li>
        )) }
      </ul>
    </section>
  )
}

'use client'

import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Params = {
  params: {
    breed: string
    id: string
  }
}

export default function DogsDetailPage ({ params }: Params) {
  const [opened, { close }] = useDisclosure(true);
  const router = useRouter()

  const handleClickClose = useCallback(() => {
    close()
    router.back()
  }, [router])

  return (
    <Modal opened={opened} onClose={handleClickClose} centered>
      <img className="max-w-sm mx-auto" src={`https://images.dog.ceo/breeds/${params.breed}/${params.id}.jpg`} alt="" />
    </Modal>
  )
}

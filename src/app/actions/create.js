'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBook(formData) {
  const { title, rating, author, blurb } = Object.fromEntries(formData)
  //we are creating a Hash so we can store multiple keya and vlaues as an object with

  //to create a unique ID for each
  const id = Math.floor(Math.random() * 10000)
  //CHORE: change the random id to a uuid provider
  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb
  })
  redirect('/')
}
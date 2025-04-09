"use client"

import Image from "next/image"
import Link from "next/link"
import { JSX } from 'react'

const posts = [
    {
        id: 1,
        title: 'Interactive 3D Application',
        href: 'https://github.com/albnjohanssn/3d',
        description: 'My first attempt to create an interactive 3D application in Next.js.',
        imageUrl: '/3d-app.png',
        date: 'April 09, 2025',
        datetime: '2025-04-09',
        author: {
            name: 'albn_johanssn',
            imageUrl: '/profile_picture.jpg',
        },
    },
    // More posts...
]

export default function Projects(): JSX.Element {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-medium tracking-tight text-balance text-gray-900 sm:text-5xl">
                        My Projects
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        This is a list of some of my projects.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
                        >
                            <div className="absolute inset-0 -z-10">
                                <Image
                                    alt=""
                                    src={post.imageUrl}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

                            <div className="flex flex-wrap items-center gap-y-1 text-sm text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="flex items-center gap-x-4">
                                    <div className="relative h-6 w-6">
                                        <Image
                                            alt=""
                                            src={post.author.imageUrl}
                                            layout="fill"
                                            className="rounded-full bg-white/10"
                                        />
                                    </div>
                                    <span>{post.author.name}</span>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-medium text-white">
                                <Link href={post.href} className="block relative">
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

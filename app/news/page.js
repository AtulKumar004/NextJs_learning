import Link from 'next/link'
import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news'

export default function NewsPage() {
  return (
    <>
    <h1>News Page</h1>
    <ul className='news-list'>
        {DUMMY_NEWS.map((obj) => {
            return (
                <li key={obj?.id}>
                    <Link href={`/news/${obj.slug}`}>
                    <img src = {`/images/news/${obj?.image}`} alt= {obj?.title}/>
                    </Link>
                </li>
            )
        })}
    </ul>
    </>
  )
}

import Head from 'next/head'

import { useState } from 'react'
import FlatList from 'flatlist-react';

import { TweetRenderItem } from '../components/TweetRenderItem';

import TweetService from '../services/tweet';

export default function Home() {
  const [user, setUser] = useState("")
  const [tweets, setTweets] = useState([])


  async function SearchUserTweets() {
    setTweets([]);
    try {
      const { data } = await TweetService.SearchTweets(user)
      setTweets(data.data)
    } catch (error) {
      console.log("err")
    }
  }

  return (
    <div>
      <Head>
        <title>Tweets</title>
        <meta name="description" content="Tweets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className='bg-gray-50 h-9 justify-center h-20'>
          <h1 className='text-blue-500 text-center pt-6 text-3xl font-bold'>
            WELCOME TO TWEETS LIST PAGE
          </h1>
        </header>
        <div className='flex justify-center items-center pt-6 space-x-3'>
          <div>
            <h1 className='text-fuchsia-500 text-2xl font-bold'>Your choosing {user}</h1>
          </div>
          <div className='flex space-x-3'>
            <input
              placeholder='Type a @username from twitter'
              onChange={event => setUser(event.target.value)}
              value={user}
            />

            <button
              onClick={SearchUserTweets}
              className='text-black font-bold bg-orange-500 rounded-md w-40'
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className='justify-center items-center text-center mt-10 flex-row'>
          <FlatList
                list={tweets}
                renderItem={TweetRenderItem}
                renderWhenEmpty={() => <div className='text-cyan-300 pt-12'>List is empty!</div>}          
          />
        </div>
      </main>

    </div>
  )
}

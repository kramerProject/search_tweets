import { TextItem } from '../components/TextItem';

export function TweetRenderItem(tweet, idx) {
  const { user, favorite_count, retweet_count, text } = tweet
    return(
        <div key={idx} className='bg-slate-100 border-4 border-cyan-900 mt-7'>
          <div className="flex justify-center items-center">
            <TextItem text="User" val={user} />
            <TextItem text="Favorites" val={favorite_count} />
            <TextItem text="Retweets" val={retweet_count} />
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
    )
}
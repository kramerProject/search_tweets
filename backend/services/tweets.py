import tweepy
import os
from dotenv import load_dotenv 

load_dotenv()
def get_tweets(user_name):
    access_key = os.environ["access_key"]
    access_secret = os.environ["access_secret"]
    consumer_key = os.environ["consumer_key"]
    consumer_secret = os.environ["consumer_secret"]

    # Twitter authentication
    auth = tweepy.OAuthHandler(access_key, access_secret)
    auth.set_access_token(consumer_key, consumer_secret)

    # Creating an API object
    api = tweepy.API(auth)

    tweets = api.user_timeline(
        screen_name=user_name,
        count=200,
        include_rts=False,
        tweet_mode='extended'
    )

    tweet_list = []
    for tweet in tweets:
        text = tweet._json["full_text"]

        refined_tweet = {
            "user": tweet.user.screen_name,
            "text": text,
            "favorite_count": tweet.favorite_count,
            "retweet_count": tweet.retweet_count,
            "created_at": tweet.created_at
        }

        tweet_list.append(refined_tweet)

    return tweet_list
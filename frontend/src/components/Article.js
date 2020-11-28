import React from 'react';
import { connect } from 'react-redux';

const Article = () => {
  return (
    <div className="Article">
      <div className="article-title">Article 1</div>
      <div className="article-photo">Image</div>
      <div className="article-details">By Asdf JKL - Philosophy</div>
      <div className="article-content">
        Warm-heartedness reinforces our self-confidence giving us not a blind confidence, but a sense of confidence based on reason. When you have that you can act transparently, with nothing to hide! Likewise, if you are honest, the community will trust you. Trust brings friendship, as a result of which you can always feel happy. Whether you look to the right or the left, you will always be able to smile.
        The practice of patience guards us against losing our presence of mind. It enables us to remain undisturbed, even when the situation is really difficult. It gives us a certain amount of inner peace, which allows us some self-control, so that we can choose to respond to situations in an appropriate and compassionate manner, rather than being driven by our disturbing emotions.
        Vanquish the impossible sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem stirred by starlight Flatland venture quasar? Hundreds of thousands rich in heavy atoms rich in mystery intelligent beings consectetur the sky calls to us. A very small stage in a vast cosmic arena vel illum qui dolorem eum fugiat quo voluptas nulla pariatur rings of Uranus Neque porro quisquam est kindling the energy hidden in matter courage of our questions.
        There is only one important point you must keep in your mind and let it be your guide. No matter what people call you, you are just who you are. Keep to this truth. You must ask yourself how is it you want to live your life. We live and we die, this is the truth that we can only face alone. No one can help us, not even the Buddha. So consider carefully, what prevents you from living the way you want to live your life?
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  // const { title, author, summary, content, tag } = state.article
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Article);
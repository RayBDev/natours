import React from 'react'

import Tour from './Tour/Tour'
import Button from '../../UI/Button/Button'

const cardData = {
  card1: {
    id: 1,
    front: {
      heading: 'The Sea Explorer',
      features: {
        first: '3 day tour',
        second: 'Up to 30 people',
        third: '2 tour guides',
        fourth: 'Sleep in cozy hostels',
        fifth: 'Difficult: very easy',
      },
    },
    back: {
      price: '$297',
    },
  },
  card2: {
    id: 2,
    front: {
      heading: 'The Forest Hiker',
      features: {
        first: '7 day tour',
        second: 'Up to 40 people',
        third: '6 tour guides',
        fourth: 'Sleep in provided tents',
        fifth: 'Difficult: medium',
      },
    },
    back: {
      price: '$497',
    },
  },
  card3: {
    id: 3,
    front: {
      heading: 'The Snow Adventurer',
      features: {
        first: '5 day tour',
        second: 'Up to 15 people',
        third: '3 tour guides',
        fourth: 'Sleep in provided tents',
        fifth: 'Difficult: hard',
      },
    },
    back: {
      price: '$897',
    },
  },
}

let cards = []
for (let card in cardData) {
  cards.push(
    <Tour
      key={cardData[card].id}
      cardNumber={cardData[card].id}
      heading={cardData[card].front.heading}
      features={cardData[card].front.features}
      price={cardData[card].back.price}
    />
  )
}

const Tours = () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Most popular tours</h2>
    </div>
    <div className="row">{cards}</div>
    <div className="u-center-text u-margin-top-extraLarge">
      <Button btnType="main" color="green" animated={true}>
        Discover all tours
      </Button>
    </div>
  </section>
)

export default Tours

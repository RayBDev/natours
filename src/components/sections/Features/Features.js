import React from 'react'

import Feature from './Feature/Feature'

const features = {
  feature1: {
    icon: 'basic-world',
    heading: 'Explore the World',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae at quam sed doloribus suscipit.',
  },
  feature2: {
    icon: 'basic-compass',
    heading: 'Meet nature',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae at quam sed doloribus suscipit.',
  },
  feature3: {
    icon: 'basic-map',
    heading: 'Find your way',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae at quam sed doloribus suscipit.',
  },
  feature4: {
    icon: 'basic-heart',
    heading: 'Live a healthier life',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae at quam sed doloribus suscipit.',
  },
}

const Features = () => {
  let featureList = []
  for (let feature in features) {
    featureList.push(
      <Feature
        key={feature}
        icon={features[feature].icon}
        heading={features[feature].heading}
        content={features[feature].content}
      />
    )
  }

  return (
    <section className="section-features" id="section-features">
      <div className="row">{featureList}</div>
    </section>
  )
}

export default Features


interface ResultParams {
  searchParams: {
    score: string
  }
}

export default function Page({searchParams}: ResultParams) {
  const { score } = searchParams;
  const trait = parseInt(score) >= 6 ? "Extrovert" : "Introvert"

  const description = {
    "Extrovert": "Extroversion is a personality trait characterized by a preference for social interactions and external stimulation. Extroverts thrive in dynamic, lively environments and draw their energy from being around others. They enjoy engaging in conversations, meeting new people, and actively participating in group activities. Extroverts often feel recharged and invigorated through socializing and external experiences. They tend to be outgoing, expressive, and enjoy being the center of attention. Extroverts are often skilled at building wide networks of acquaintances and maintaining an active social life. Their natural inclination towards social engagement and enthusiasm often leads them to excel in professions that involve frequent interactions and collaboration with others.",
    "Introvert": "Introversion is a personality trait characterized by a preference for solitude and quiet introspection. Introverts tend to feel most energized and focused when they are alone or in small, intimate settings. They often enjoy engaging in solitary activities such as reading, writing, or pursuing hobbies that allow them to recharge and reflect. Introverts typically require time to process their thoughts and may feel drained by prolonged social interactions. They tend to be excellent listeners and observers, valuing depth and meaningful connections in their relationships. While introverts may appear reserved or shy in certain situations, they possess a rich inner world and often excel in creative pursuits that require introspection and thoughtful analysis."
  }

  new URLSearchParams
  return (
    <main>
      <h1>Your Personality Trait:</h1>
      <h2 data-test-id="trait">{trait}</h2>
      <p>{description[trait]}</p>
    </main>
  );
};

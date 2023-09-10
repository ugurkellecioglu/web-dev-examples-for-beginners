var textContainer = document.getElementById("typewriter-effect")

var typewriter = new Typewriter(textContainer, {
  loop: true,
  delay: 75,
})

const adjectives = ["Fullstack Web developer", "Freelancer", "JS Enthusiast"]

const texts = adjectives.map(
  (text, index) => `<span class="typewriter-text-${index}">${text}</span>`
)

typewriter
  .pauseFor(1000)
  .typeString("Hi there! This is Uğur<br/>")
  .pauseFor(300)

texts.forEach((text, index) => {
  typewriter.typeString(text)
  typewriter.pauseFor(300)
  typewriter.deleteChars(adjectives[index].length)
  typewriter.pauseFor(300)
})

typewriter.start()

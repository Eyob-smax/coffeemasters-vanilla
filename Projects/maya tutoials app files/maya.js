const menuSection = document.querySelector(".menu-section");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about");
const aboutSection = document.querySelector(".about-section");
const homeSection = document.querySelector(".home");
const homeButton = document.querySelector("#home");
const testimonialsButton = document.querySelector("#testimonials");
const testimonialsSection = document.querySelector(".testimonials-section");
const homeStartButton = document.querySelector(".home-start-btn");
const preferenceSection = document.querySelector(".select-preference");
const startQuizButton = document.querySelector("#start-quiz");
const mainContent = document.querySelector(".main");
const backButton = document.querySelector("#back-btn");
const nextButton = mainContent.querySelector("#next-btn");
const prevButton = mainContent.querySelector("#prev-btn");
const categoryDisplay = mainContent.querySelector("#category-type");
const scoreDisplay = document.querySelector("#current-score");
const totalQuestionDisplay = document.querySelector("#total-question");
const answerContainer = mainContent.querySelector(".answers");
const questionText = mainContent.querySelector("#question-text");
const questionNumberDisplay = mainContent.querySelector(
  "#current-question-index"
);
const timerBar = document.querySelector(".timer-bar");
const timeSlap = document.querySelector(".timer-text");

const questionsArry = [
  {
    unit: "1",
    category: "Logic",
    question: "What is philosophy?",
    answers: [
      {
        text: "It is usually unorganised point of view of individuals",
        correct: false,
      },
      {
        text: "It is a crucial and rational enterprise that rises to answer fundamental questions",
        correct: true,
      },
      {
        text: "It is something which is illusive and randomized knowledge",
        correct: false,
      },
      { text: "", correct: false },
    ],
    answered: false,
  },
  {
    unit: "1",
    category: "Logic",
    question:
      "Which branch of philosophy deals with questions about existence and reality?",
    answers: [
      { text: "Epistemology", correct: false },
      { text: "Metaphysics", correct: true },
      { text: "Logic", correct: false },
      { text: "Axiology", correct: false },
    ],
    answered: false,
  },
  {
    unit: "1",
    category: "Logic",
    question:
      "What is the primary concern of epistemology as discussed in the text?",
    answers: [
      { text: "The nature of moral values", correct: false },
      { text: "The nature and scope of knowledge", correct: false },
      { text: "The principles of valid reasoning", correct: false },
      { text: "The study of reality and existence", correct: true },
    ],
    answered: false,
  },
  {
    unit: "1",
    category: "Logic",
    question:
      "Which of the following is considered a source of human knowledge?",
    answers: [
      { text: "Sense experience", correct: true },
      { text: "Metaphysical intuition", correct: false },
      { text: "Epistemic verification", correct: false },
      { text: "Deductive logic", correct: false },
    ],
    answered: false,
  },
  {
    unit: "1",
    category: "Logic",
    question: 'How does the text define "skepticism"?',
    answers: [
      { text: "Belief in absolute truth", correct: false },
      { text: "Acceptance of divine revelation", correct: false },
      { text: "Reliance on intuition over reason", correct: false },
      {
        text: "Doubt about the possibility of certain knowledge",
        correct: true,
      },
    ],
    answered: false,
  },
  {
    unit: "1",
    category: "Logic",
    question: 'How does the text define "agnosticism"?',
    answers: [
      { text: "A denial of all knowledge", correct: false },
      {
        text: "A position that the truth about certain matters, especially divine ones, is unknown or unknowable",
        correct: true,
      },
      { text: "A firm belief in the existence of God", correct: false },
      { text: "An acceptance of scientific authority", correct: false },
    ],
    answered: false,
  },
  {
    unit: "1",
    category: "Logic",
    question:
      "Which of the following is NOT a focus of metaphysical study as outlined in the text?",
    answers: [
      { text: "The nature of the soul", correct: false },
      { text: "The existence of God", correct: false },
      { text: "The principles of valid argumentation", correct: true },
      { text: "The structure of reality", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Logic",
    question:
      "Why might different sources of knowledge be considered complementary rather than antagonistic?",
    answers: [
      { text: "To support the primacy of divine revelation", correct: false },
      {
        text: "To provide a more holistic understanding of truth",
        correct: true,
      },
      { text: "To eliminate the need for skepticism", correct: false },
      { text: "To validate the role of empirical observation", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Logic",
    question:
      "Which philosophical concept involves the belief that knowledge is attained through reason and logic, not experience?",
    answers: [
      { text: "Empiricism", correct: false },
      { text: "Rationalism", correct: true },
      { text: "Skepticism", correct: false },
      { text: "Agnosticism", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Logic",
    question:
      'What is the role of "intuition" in the context of human knowledge according to the text?',
    answers: [
      { text: "A reliable source of factual knowledge", correct: false },
      { text: "A method of logical reasoning", correct: false },
      {
        text: "An immediate understanding without conscious reasoning",
        correct: true,
      },
      { text: "A form of empirical observation", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question: "________is a common feature of arguments from authority?",
    answers: [
      { text: "They rely on general principles.", correct: false },
      {
        text: "They depend on the credibility of the authority or witness.",
        correct: true,
      },
      {
        text: " They generalize from a sample to a whole population.",
        correct: false,
      },
      {
        text: "They involve predicting future events based on current signs.",
        correct: false,
      },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      "How would an inductive argument be classified if it proceeds from general statements to specific cases?",
    answers: [
      { text: "Deductive", correct: false },
      { text: "Inductive", correct: true },
      { text: "Causal", correct: false },
      { text: "Argument from analogy", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      "Which of the following describes the sufficient condition relationship?",
    answers: [
      { text: "If X is a dog, then X is an animal.", correct: true },
      { text: "If X is an animal, then X is a dog.", correct: false },
      { text: "If X is not a dog, then X is not an animal.", correct: false },
      { text: "If X is not an animal, then X is a cat.", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question: "How is a conditional statement different from an argument?",
    answers: [
      {
        text: "A conditional statement provides evidence for its conclusion.",
        correct: false,
      },
      {
        text: "An argument presents a reasoning process for its claim.",
        correct: false,
      },
      {
        text: "A conditional statement asserts a relationship but does not claim evidence for its truth.",
        correct: true,
      },
      {
        text: "An argument only expresses a relationship without evidence.",
        correct: false,
      },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question: "Which statement about conditional statements is true?",
    answers: [
      {
        text: "A conditional statement asserts a relationship between antecedent and consequent without proving anything.",
        correct: true,
      },
      {
        text: "A conditional statement is an argument if it contains evidence.",
        correct: false,
      },
      {
        text: "Conditional statements must have a reasoning process to be considered arguments.",
        correct: false,
      },
      {
        text: "Conditional statements provide premises and conclusions to support a claim.",
        correct: false,
      },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      "In which scenario is a passage considered an argument rather than a mere illustration?",
    answers: [
      {
        text: 'When the passage uses indicator words like "thus" but does not argue a point.',
        correct: true,
      },
      {
        text: "When the passage uses examples to prove a claim.",
        correct: false,
      },
      {
        text: "When the passage provides examples without making a claim.",
        correct: false,
      },
      { text: "When the passage merely describes examples.", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      '"Some over-the-counter medicines should not be given to very young children. For example, cold medicines contain decongestants and antihistamines. These substances raise blood pressure and heart rate. If an overdose should occur in a young child, the result can be fatal." from this argument what is the conclusion.',
    answers: [
      {
        text: "These substances raise blood pressure and heart rate.",
        correct: false,
      },
      { text: "If an overdose....the result can be fetal.", correct: false },
      {
        text: "Some over-the-counter medicines.....very young children.",
        correct: true,
      },
      {
        text: "Cold medicines contain decongestants and antihistamines.",
        correct: false,
      },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      " The premise can show the conclusion acceptable only if thedy theselves are acceptable.(from mid exams)",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      "Any passage that contains an argument must contain a claim that something is supported by evidence or reasons.(from hurley book)",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Logic",
    question:
      "Since the 1950s a malady called whirling disease has invaded U.S. fishing streams, frequently attacking rainbow trout. A parasite deforms young fish, which often chase their tails before dying, hence the name.",
    answers: [
      { text: "Expository", correct: false },
      { text: "Explanation", correct: true },
      { text: "Argument", correct: false },
      { text: "Conditional Statement", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      "What kind of definition fails if it does not include an operation to determine applicability?",
    answers: [
      { text: "Etymological", correct: false },
      { text: "Synonymous", correct: false },
      { text: "Genus and Difference", correct: false },
      { text: "Operational", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      "Which rule states that definitions should avoid using circular definitions?",
    answers: [
      { text: "Rule 1", correct: true },
      { text: "Rule 2", correct: false },
      { text: "Rule 3", correct: false },
      { text: "Rule 4", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      "Which type of definition explains the root meaning or seminal meaning of a word?",
    answers: [
      { text: "Operational Definition", correct: false },
      { text: "Synonymous Definition", correct: false },
      { text: "Etymological Definition", correct: true },
      { text: "Definition by Genus and Difference", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      '“The majestic sunset painted the sky with hues of gold and crimson." From this statement which word has an emotive meaning.',
    answers: [
      { text: "The majestic", correct: true },
      { text: "The majestic sun set", correct: false },
      { text: "Gold and crimson", correct: false },
      { text: "Hues", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      "What kind of definition involves specifying the conditions under which a term applies to something?",
    answers: [
      { text: "Operational Definition", correct: true },
      { text: "Etymological Definition", correct: false },
      { text: "Synonymous Definition", correct: false },
      { text: "Definition by Genus and Difference", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      'According to the rules of lexical definitions, which of the following is an appropriate definition for "bunny"?',
    answers: [
      {
        text: "A mammalian of the family Leporidae of the order Lagomorpha.",
        correct: false,
      },
      { text: "A small, furry animal with long ears.", correct: false },
      { text: "A rabbit.", correct: true },
      { text: "A young hare.", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      "What is the primary limitation of operational definitions according to the text?",
    answers: [
      { text: "They are inherently circular.", correct: false },
      {
        text: "They cannot apply to terms outside the framework of science.",
        correct: true,
      },
      { text: "They are too broad in scope", correct: false },
      { text: "They are often too narrow.", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      "Which rule states that a lexical definition should avoid using terms that are themselves defined in terms of the term being defined?",
    answers: [
      { text: "Conveying Essential Meaning", correct: false },
      { text: "Avoiding Negative Definitions", correct: false },
      { text: "Avoiding Circularity", correct: true },
      { text: "Avoiding Figurative Language", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      " The clarification and analysis of terms and statements is the objective of philosophy in general and logic in particular.(𝑓𝑖𝑛𝑎𝑙 𝑒𝑥𝑎𝑚𝑠)",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Logic",
    question:
      " The theory that claims the meaning are purely mental contents provoked by signs.",
    answers: [
      { text: "Idea theory", correct: true },
      { text: "Truth-condition theory", correct: false },
      { text: "Use theory", correct: false },
      { text: "Pragmantist theory", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question: "Which of the following is a measure of a country's compactness?",
    answers: [
      { text: "Population density", correct: false },
      { text: "Area to Boundary ratio (A/B ratio)", correct: true },
      { text: "Number of neighboring countries", correct: false },
      { text: "Elevation range", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question:
      "Which of the following is not a type of map mentioned in the text?",
    answers: [
      { text: "Climatic", correct: true },
      { text: "Special purpose", correct: false },
      { text: "Topographical", correct: false },
      { text: "Statistical", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question: "Ethiopia is classified under which shape of countries?",
    answers: [
      { text: "Elongated", correct: false },
      { text: "Fragmented", correct: false },
      { text: "Compact", correct: true },
      { text: "Perforated", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question:
      "What factor has influenced Ethiopia’s exposure to foreign invasions?",
    answers: [
      { text: "Its size", correct: false },
      {
        text: "Geopolitical considerations and proximity to the Red Sea",
        correct: true,
      },
      { text: "The diversity of its population", correct: false },
      { text: "Its climate", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question:
      "How is Ethiopia's location expressed in terms of its astronomical or absolute location?",
    answers: [
      { text: "By lines of latitude and longitude", correct: true },
      {
        text: "By its relative position to neighboring countries",
        correct: false,
      },
      { text: "its proximity to water bodies", correct: false },
      { text: "All", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question:
      "A geographic area having distinctive characteristics that distinguishes itself from adjacent unit is:",
    answers: [
      { text: "Location", correct: false },
      { text: "Place", correct: false },
      { text: "Region", correct: true },
      { text: "Toponym", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question:
      "Due to longitudinal extension, Ethiopia has a one hour difference between Akobo and Ogaden.. Assume that a flight takes only one hour and an airplane departs from Ogaden at 2:00 am, then what will be the landing time of the airplane at Akobo?",
    answers: [
      { text: "3:00 am", correct: false },
      { text: "8:00 am", correct: false },
      { text: "2:00 am", correct: true },
      { text: "9:00 am", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question: "Which ocean does the Horn of Africa protrude into?",
    answers: [
      { text: "Pacific Ocean", correct: false },
      { text: "Indian Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Mediterranean Sea", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question: "How does Ethiopia's relative location impact its climate?",
    answers: [
      { text: "Subarctic climate", correct: false },
      { text: "Desert climate due to the Indian Ocean", correct: false },
      { text: "None", correct: false },
      { text: "Tropical climate modified by altitude", correct: true },
    ],
  },
  {
    unit: "1",
    category: "Geography",
    question: "What is Ethiopia's approximate area in square kilometers?",
    answers: [
      { text: "1,106,000", correct: true },
      { text: "22,000", correct: false },
      { text: "582,644", correct: false },
      { text: "637,657", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "The Precambrian Era covers roughly what percentage of Earth's geological time?",
    answers: [
      { text: "55%", correct: false },
      { text: "88%", correct: true },
      { text: "75%", correct: false },
      { text: "95%", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "In which era did mammals become the dominant land animals on Earth?",
    answers: [
      { text: "Mesozoic", correct: false },
      { text: "Paleozoic", correct: false },
      { text: "Precambrian", correct: false },
      { text: "Cenozoic", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question: "The age of the Earth is estimated to be approximately:",
    answers: [
      { text: "2.5 billion years", correct: false },
      { text: "3.5 billion years", correct: false },
      { text: "4.5 billion years", correct: true },
      { text: "6 billion years", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "What distinguishes exogenic geological processes from endogenic ones?",
    answers: [
      {
        text: "Processes driven by external forces like weather and water",
        correct: true,
      },
      { text: "Association with tectonic activity", correct: false },
      { text: "Involvement in rock metamorphosis", correct: false },
      { text: "Occurrence within the Earth's crust", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "The formation of high mountains, such as the Himalayas, is primarily attributed to:",
    answers: [
      { text: "Transform faults", correct: false },
      { text: "Convergent plate boundaries", correct: true },
      { text: "Divergent plate boundaries", correct: false },
      { text: "Volcanic eruptions", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "Which period within the Mesozoic Era is known for the emergence of the first birds?",
    answers: [
      { text: "Triassic", correct: false },
      { text: "Jurassic", correct: false },
      { text: "Permian", correct: false },
      { text: "Cretaceous", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question: "Radiometric dating is primarily used to:",
    answers: [
      { text: "Determine the absolute age of rocks", correct: true },
      { text: "Study tectonic movements", correct: false },
      { text: "Predict volcanic eruptions", correct: false },
      { text: "Identify mineral compositions", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "Which era witnessed the break-up of the supercontinent Pangaea, influencing the current continental arrangement?",
    answers: [
      { text: "Mesozoic", correct: true },
      { text: "Paleozoic", correct: false },
      { text: "Cenozoic", correct: false },
      { text: "Precambrian", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      "The geological process that involves the deposition of sediments in new locations is:",
    answers: [
      { text: "Erosion", correct: false },
      { text: "Crustal deformation", correct: false },
      { text: "Sedimentation", correct: true },
      { text: "Weathering", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question:
      " The largest mass extinction event in Earth's history occurred at the end of which geological era?",
    answers: [
      { text: "Mesozoic", correct: false },
      { text: "Cenozoic", correct: false },
      { text: "Precambrian", correct: false },
      { text: "Paleozoic", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Geography",
    question: 'The Mesozoic Era is often called the "Age of Reptiles" because:',
    answers: [
      { text: "Birds evolved significantly during this era", correct: false },
      { text: "Large-scale glaciations occurred", correct: false },
      { text: "Mammals were the dominant species", correct: false },
      {
        text: "Reptiles were the dominant species, including dinosaurs",
        correct: true,
      },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question:
      "_________ are reliably known or meaningful digits in a measured or calculated quantity.",
    answers: [
      { text: "Significant figure", correct: true },
      { text: "Decimal point", correct: false },
      { text: "Uncertainity", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question:
      "All zeros to the left of understood decimal point but to the right of non-zero digit are significant if they are come from a measurement.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question:
      "As a rule significant numbers should be expressed in _________ significant figures.",
    answers: [
      { text: "Three", correct: false },
      { text: "Two", correct: true },
      { text: "One", correct: false },
      { text: "Four", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question:
      "Which one of the following experimental errors can be reduced by talking repeated measurement.(𝑓𝑟𝑜𝑚 𝑚𝑖𝑑𝑒𝑥𝑎𝑚𝑠)",
    answers: [
      { text: "Parallel errors", correct: false },
      { text: "Random errors", correct: true },
      { text: "Zero errors", correct: false },
      { text: "Systematic errors", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question:
      "which one of the following is 𝙛𝙖𝙡𝙨𝙚 regrding significant figures ",
    answers: [
      {
        text: "The power of 10 are counted while counting the number of significant figures.",
        correct: true,
      },
      {
        text: "Greater the number of significant figure in a measurement, smaller is the percentage error.",
        correct: false,
      },
      { text: "All non-zero digits are significant", correct: false },
      {
        text: "The zeros appearing in the middle of non -zero number are significant while those at the end of a number without a decimal point are ambiguous.",
        correct: false,
      },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question: "17.35g + 25.6g",
    answers: [
      { text: "42.95", correct: false },
      { text: "43.0", correct: true },
      { text: "42.9", correct: false },
      { text: "42.6", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question:
      " In multiplication and division, the percentage uncertainty values should be added.(𝑓𝑟𝑜𝑚 𝑚𝑖𝑑 𝑒𝑥𝑎𝑚)",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question: "Substract 36.8 km from 97km.",
    answers: [
      { text: "60.2", correct: true },
      { text: "60.28", correct: false },
      { text: "60.0", correct: false },
      { text: "60", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question: "The number of significant figures in 0.01020 is",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "6", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Physics",
    question: "17.35g + 25.6g",
    answers: [
      { text: "42.95", correct: false },
      { text: "43.0", correct: true },
      { text: "42.9", correct: false },
      { text: "42.6", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "A rock is released from rest from the top of a very high cliff, and accelerates downward at g. Approximately how far does the rock travel in the first 7 seconds of its free-fall? (Assume no air friction)",
    answers: [
      { text: "35", correct: false },
      { text: "70", correct: false },
      { text: "180", correct: false },
      { text: "245", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      " A projectile is fired horizontally from a height of 20 meters above the ground, with an initial velocity of 7.0 m/s. How far does the projectile travel horizontally before it reaches the ground?",
    answers: [
      { text: "7m", correct: false },
      { text: "14m", correct: true },
      { text: "140m", correct: false },
      { text: "20m", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "A particle begins from rest at a point +10 meters from the origin at time t = 0, and begins accelerating at a constant 2 m/s2 in the negative direction. At time t = 4 seconds, the particle has reached a certain speed; it  stops accelerating, and continues traveling with that same speed until t = 7 seconds. What is its position relative to the origin at t = 7 seconds?",
    answers: [
      { text: "-6 meters", correct: false },
      { text: "-8 meters", correct: false },
      { text: "-40 meters", correct: false },
      { text: "-30 meters", correct: true },
      { text: "-59 meters", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "A person walks first at a constant speed of 5m/s along the straight line from point A to point B,and then back along the same line from B to A at a constant speed of 3m/s. What is his average speed over the entire trip.(𝑓𝑟𝑜𝑚 𝑡𝑒𝑥𝑡 𝑏𝑜𝑜𝑘)",
    answers: [
      { text: "3.75", correct: false },
      { text: "15/4", correct: false },
      { text: "15", correct: false },
      { text: "8", correct: false },
      { text: "A and B", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question: "From the above question what is average velocity?",
    answers: [
      { text: "Zero", correct: true },
      { text: "15/4", correct: false },
      { text: "The same as average speed", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "A track covers 40m in 8.5s while smoothly slowing down to a final speed of 2.8m/s. Find its original speed",
    answers: [
      { text: "5 m/s", correct: false },
      { text: "6.6 m/s", correct: true },
      { text: "10 m/s", correct: false },
      { text: "15 m/s", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "A jet plane lands with a speed of 100m/s and slows down at a rate of 5 m/s2 as it comes to rest. What is the time interval needed by the jet to come to rest?",
    answers: [
      { text: "10 s", correct: false },
      { text: "30 s", correct: false },
      { text: "5 s", correct: false },
      { text: "20 s", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "What average acceleration is needed to accelerate a car from 36 km/h to 72 km/h in 25seconds?",
    answers: [
      { text: "0.5 m/s^2", correct: false },
      { text: "0.8 m/s^2", correct: true },
      { text: "5 km/h^2", correct: false },
      { text: "B and C", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "A tennis ball is thrown vertically upward with an initial speed of 17 m/s and caught at the same level above the ground. How long was the ball in air.(𝑓𝑟𝑜𝑚 𝑚𝑖𝑑 𝑒𝑥𝑎𝑚)",
    answers: [
      { text: "5.7 seconds", correct: true },
      { text: "10 seconds", correct: false },
      { text: "25 seconds", correct: false },
      { text: "3.4 seconds", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Physics",
    question:
      "From a 25 m building, a ball is thrown vertically upward at an initial velocity 20 m/s. How long will it take to hit the ground?(𝑓𝑟𝑜𝑚 𝑎𝑎𝑢 𝑚𝑖𝑑 𝑒𝑥𝑎𝑚)",
    answers: [
      { text: "5 Second", correct: true },
      { text: "4 Second", correct: false },
      { text: "3 Second", correct: false },
      { text: "2 Second", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "Fluid mechanics is a branch of physics tht studies about ________.",
    answers: [
      { text: "Water and its environment", correct: false },
      { text: "Gas like oxygen and its activity", correct: false },
      { text: "About fluids movement only", correct: false },
      { text: "Studies fluids in motion and at rest alse", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "In water bodies, like oceans as the depth increase pressure __________.(conceptual from google)",
    answers: [
      { text: "Also increase", correct: true },
      { text: "Decrease", correct: false },
      {
        text: "The depth of the water is not directly related with the pressure",
        correct: false,
      },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question: "We use straw to suck soft drinks. Why?(from final exams)",
    answers: [
      {
        text: "Because it id more comfortable than using a spoon",
        correct: false,
      },
      { text: "Becauseit is more portable", correct: false },
      {
        text: "When we use straw, the pressure inside the straw becomes less than the atmospheric pressure.",
        correct: true,
      },
      {
        text: "When we use straw, the pressure inside the straw becomes greater than the atmospheric pressure.",
        correct: false,
      },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "_______ are materials that do not regain their original shape and size when the deforming force is removed.",
    answers: [
      { text: "Elastic materials", correct: false },
      { text: "Elastic deformation", correct: false },
      { text: "Plastic materials", correct: true },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "Tensile Deformation can be occur by a single force.(𝑓𝑟𝑜𝑚 𝑚𝑖𝑑 𝑒𝑥𝑎𝑚𝑠)",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "Hydraulic press has one piston of diameter 2 cm & the other piston of diameter 8 cm. What force must be applied to the smaller piston to obtain a force of 1600 N at the larger piston?",
    answers: [
      { text: "100 N", correct: true },
      { text: "200 N", correct: false },
      { text: "50 N", correct: false },
      { text: "10 N", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "A rock, which weights 1400N in air, has an apparent weight of 900 N when submerged in fresh water (998kg/m³). The volume of the rock is:(𝑓𝑟𝑜𝑚 𝑚𝑖𝑑 𝑒𝑥𝑎𝑚𝑠)",
    answers: [
      { text: "0.23 m^3", correct: false },
      { text: "0.051 m^3", correct: true },
      { text: "0.01 m^3", correct: false },
      { text: "0.9 m^3", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      " A block of Ag of mass x kg hanging from a string is immersed in a liquid of relative density 0.72. If the relative density of Ag is 10 and tension in the string is 37.12 N then compute the mass of Ag block.(from final exams)",
    answers: [
      { text: "4 Kg", correct: true },
      { text: "5 Kg", correct: false },
      { text: "6 Kg", correct: false },
      { text: "10 Kg", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Physics",
    question:
      "The reading of pressure meter attached with a closed pipe is 5 * 10^5N/m^2. On opening the valve of the pipe, the reading of the pressure meter is 4.5 × 10^5 N/m^2. Calculate the speed of the water flowing in the pipe.",
    answers: [
      { text: "10 m/s", correct: true },
      { text: "20 m/s", correct: false },
      { text: "30 m/s", correct: false },
      { text: "5 m/s", correct: false },
    ],
  },

  {
    unit: "3",
    category: "Physics",
    question:
      "A material having greater young's modulus also possesses greater bulk.modulus.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },

  {
    unit: "1",
    category: "Maths",
    question: "The truth value ‘9 is prime then 3 is even’.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "Let Q(x) be the statement “x < 5.” What is the truth value of the quantification ∀xQ(x), having domains as real numbers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "Let domain of m includes all students, P (m) be the statement “m spends more than 2 hours in playing polo”. Express ∀m ¬P (m) quantification in English.",
    answers: [
      {
        text: "A student is there who spends more than 2 hours in playing pool",
        correct: false,
      },
      {
        text: "There isa student who does not spend more than 2 hours inplaying pool",
        correct: false,
      },
      { text: "All students spends more than 2 hours ", correct: false },
      {
        text: "No student spends more than 2 hours in playing pool",
        correct: true,
      },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "The method(s) that are used to check the validity of statements is/are",
    answers: [
      { text: "Contrapositive method", correct: false },
      { text: "Method of contradiction", correct: false },
      { text: "Using a couter example", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "If I plant a tree, then I will get dirt under my nails. I didn’t get dirt under my nails. Therefore, I didn’t plant a tree.",
    answers: [
      { text: "Valid", correct: true },
      { text: "Invalid", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question: "A= {a,b,c,d}   then the number of subset of A is",
    answers: [
      { text: "4", correct: false },
      { text: "16", correct: true },
      { text: "32", correct: false },
      { text: "64", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "Let A = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. Then the number of subsets of A containing exactly two elements is",
    answers: [
      { text: "20", correct: false },
      { text: "40", correct: false },
      { text: "45", correct: true },
      { text: "90", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "In a survey of 1,000 consumers it is found that 720 consumers liked product A and 450 liked product B. What is the least number that must have liked both the products?",
    answers: [
      { text: "70", correct: true },
      { text: "170", correct: false },
      { text: "270", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "If A is a non-empty set such that the power set of A is P(A) = {ϕ, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3}} then find the set A ?",
    answers: [
      { text: "{1}", correct: false },
      { text: "{1, 2}", correct: false },
      { text: "{1, 2, 3}", correct: true },
      { text: "{2, 3, 10}", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Maths",
    question:
      "For two non-empty sets A and B If A∩B=∅  then which one of the following is true?",
    answers: [
      { text: "n(A) = n(B)", correct: false },
      { text: "B is the proper subset of A", correct: false },
      { text: "A is proper subset of B", correct: false },
      { text: "None of these", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Maths",
    question:
      "A set of natural number is closed under addition and subtraction.(from final exms)",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Maths",
    question:
      " All number systems are not closed under division operation.(from final exams)",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    unit: "2",
    category: "Maths",
    question:
      "For any two natural numbers a & b we have a > b or a < b or a = b . This law is called:",
    answers: [
      { text: "Addition property", correct: false },
      { text: "Transitive property", correct: false },
      { text: "Law of trichotmy", correct: true },
      { text: "All", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Maths",
    question:
      "Tje fractional form of a decimal number 6.237¯ is:(7 is the repetitive no)",
    answers: [
      { text: "137/22", correct: true },
      { text: "150/70", correct: false },
      { text: "137.5/25", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Maths",
    question:
      " ____________ real numbers states that: Every non-empty subset of R that has lower bounds has glb and every non-empty subset of R that has upper bounds has a lub.(from final exams)",
    answers: [
      { text: "Countness of real number", correct: false },
      { text: "Compactness of real number", correct: true },
      { text: "Vagueness of real number", correct: false },
      { text: "Sharpeness of real number", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Maths",
    question:
      "What is the conjugate of the complex number 3 + 4i?(from final exams)",
    answers: [
      { text: "3 - 4i", correct: true },
      { text: "3 + 4i", correct: false },
      { text: "-3 - 4i", correct: false },
      { text: "-3 + 4i", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question: "Find the domain of a function such that: f(x) = |x + 2|.",
    answers: [
      { text: "x > 0", correct: false },
      { text: "x < 0", correct: false },
      { text: "R", correct: true },
      { text: "x >= 0", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "The domain of a logarithmic function y = log_a(x) is all real numbers.(from final exams)",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "Let f be the subset of Z x Z defined by f  = {(mn,m + n) : m,n an element of Z}. Is f a function?(from final exams)",
    answers: [
      { text: "Yes, it is", correct: false },
      { text: "No, it isn't", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question: `f(x)={ 3x – 5, x < 1 } find f(-1) and 
               { x² – 1, x ≥ 1 }f(3) respectively.(from text book)`,
    answers: [
      { text: "8 and 0", correct: false },
      { text: "-8 and 8", correct: true },
      { text: "2 and -4", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "Let f be a function from A to set B so when we can a function is real valued?",
    answers: [
      { text: "If B is a subset of real number", correct: true },
      { text: "If A is subset of real number system", correct: false },
      { text: "If B is subset of integer number system", correct: false },
      { text: "All", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "When two functions are added together the domain of the combination of the twobecomes:",
    answers: [
      { text: "The sum of domains of the two", correct: false },
      { text: "The difference of domains of the two", correct: false },
      { text: "The union of the domains of the two", correct: false },
      { text: "The intersection of the domains of the two", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question: "Find fog(x) if f(x) = x/x + 1 and g(x) = 2/x - 1.",
    answers: [
      { text: "3/x + 1", correct: false },
      { text: "2/x - 1", correct: false },
      { text: "2/x + 1", correct: true },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "If the order pairs (x² - 3x, y² + 4y) and (-2, 5) are equal, then find x and y.(from worksheets)",
    answers: [
      { text: "x = 2 and y = 5", correct: false },
      { text: "x = 1 and y = -1", correct: false },
      { text: "x = 2 and y = -5", correct: false },
      { text: "x = -1 and y = 5", correct: false },
      { text: "A and B", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "Find the domain of fog(x) if f(x) = √x and g(x) = |x|.(from final exams)",
    answers: [
      { text: "R", correct: true },
      { text: "x ≥ 0", correct: false },
      { text: "All real number except zero", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Maths",
    question:
      "Let f(x) = x² + 2x, g(x) = 2x + 3 and h(x) = (1 + x)/(2 + x²) find the domain and fogoh(-3) respectively of the composite function fogoh(x) or f(g(h(x))).(from final exams)",
    answers: [
      { text: "Real number & 8.2", correct: false },
      { text: "Real number except zero & 8", correct: false },
      { text: "The set of positive real number & 4", correct: true },
      { text: "The set of all negative real number & 8.2", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question: "Psychology is best defined as the scientific study of:",
    answers: [
      { text: "Human biology and social interactions", correct: false },
      { text: "Emotional intelligence and resilience", correct: false },
      { text: "Behavior and mental processes", correct: true },
      { text: "Historical events and cultural development", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question: "One of the primary goals of psychology is to:",
    answers: [
      {
        text: "Standardize emotional responses across cultures",
        correct: false,
      },
      { text: "Eliminate mental illness entirely", correct: false },
      { text: "Establish new philosophical paradigms", correct: false },
      { text: "Predict and explain behavior", correct: true },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      'The primary aim of the "cognitive perspective" in psychology is to understand:',
    answers: [
      { text: "The influence of childhood experiences", correct: false },
      {
        text: "Mental processes like perception and problem-solving",
        correct: true,
      },
      { text: "The role of cultural traditions in behavior", correct: false },
      { text: "Physiological mechanisms underlying behavior", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      "Which school of psychology was founded by Wilhelm Wundt and focused on breaking down mental processes into their most basic components?",
    answers: [
      { text: "Functionalism", correct: false },
      { text: "Psychoanalysis", correct: false },
      { text: "Structuralism", correct: true },
      { text: "Behaviorism", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      "Which psychological perspective focuses on the role of unconscious drives and conflicts in determining behavior?",
    answers: [
      { text: "Psychoanalytic", correct: true },
      { text: "Behaviorist", correct: false },
      { text: "Humanistic", correct: false },
      { text: "Biological", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      'An essential characteristic of the "humanistic perspective" in psychology is its emphasis on:',
    answers: [
      { text: "Neurochemical interactions", correct: false },
      { text: "Self-actualization and free will", correct: true },
      { text: "Social conditioning", correct: false },
      { text: "Dream analysis", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      'The "biological perspective" in psychology seeks to explain behavior through:',
    answers: [
      { text: "Social learning theories", correct: false },
      { text: "Cultural adaptation", correct: false },
      { text: "Cognitive distortions", correct: false },
      { text: "Neural mechanisms and genetic influences", correct: true },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      "A psychologist studying how social environments influence individuals' behavior is most likely specialized in:",
    answers: [
      { text: "Forensic psychology", correct: false },
      { text: "Clinical psychology", correct: false },
      { text: "Social psychology", correct: true },
      { text: "Developmental psychology", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      "The primary research method used by early psychologists like Wilhelm Wundt to study the mind was:",
    answers: [
      { text: "Introspection", correct: true },
      { text: "Surveys", correct: false },
      { text: "Experimental manipulation", correct: false },
      { text: "Longitudinal studies", correct: false },
    ],
  },
  {
    unit: "1",
    category: "Psychology",
    question:
      " Which modern psychological approach emphasizes the adaptive function of thoughts and behaviors, suggesting they evolved to serve specific purposes?",
    answers: [
      { text: "Humanistic", correct: false },
      { text: "Evolutionary", correct: true },
      { text: "Psychodynamic", correct: false },
      { text: "Behavioral", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question:
      "Which factor primarily influences the selectivity of perception?",
    answers: [
      { text: "Sensory adaptation", correct: false },
      { text: "Neural fatigue", correct: false },
      { text: "Attention", correct: true },
      { text: "Sensory overload", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question:
      'In perceptual processing, "depth perception" enables an individual to:',
    answers: [
      { text: "Identify colors in dim lighting", correct: false },
      {
        text: "Judge the distance and three-dimensional characteristics of objects",
        correct: true,
      },
      { text: "Focus on multiple stimuli at once", correct: false },
      { text: "Recognize familiar faces", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question: 'The concept of "perceptual constancy" explains how we:',
    answers: [
      {
        text: "Perceive objects as unchanging despite changes in sensory input",
        correct: true,
      },
      {
        text: "Detect motion through changes in light intensity",
        correct: false,
      },
      { text: "Differentiate between various sounds", correct: false },
      { text: "Interpret complex language patterns", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question: 'An example of "perceptual illusion" would be:',
    answers: [
      {
        text: "Seeing a straight line as bent due to background patterns",
        correct: true,
      },
      { text: "Mishearing a word in a noisy room", correct: false },
      { text: "Feeling a phantom limb after amputation", correct: false },
      { text: "Experiencing motion sickness while stationary", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question: 'The "absolute threshold" in sensation is defined as:',
    answers: [
      {
        text: "The level of stimulus that can be detected 100% of the time",
        correct: false,
      },
      {
        text: "The point at which a stimulus is consciously perceived",
        correct: false,
      },
      { text: "The intensity at which a stimulus causes pain", correct: false },
      {
        text: " The minimum stimulus intensity detectable 50% of the time",
        correct: true,
      },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question:
      "Which depth cue involves the use of both eyes to perceive depth?",
    answers: [
      { text: "Texture gradient", correct: false },
      { text: "Linear perspective", correct: false },
      { text: "Binocular disparity", correct: true },
      { text: "Relative size", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question: 'The term "perceptual set" refers to:',
    answers: [
      { text: "The brain’s ability to multitask", correct: false },
      {
        text: "A readiness to perceive a stimulus in a particular way",
        correct: true,
      },
      { text: "An inability to detect subtle differences", correct: false },
      { text: "The adaptation to repetitive stimuli", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question: 'A "difference threshold" is also known as:',
    answers: [
      { text: "Absolute threshold", correct: false },
      { text: "Sensory adaptation point", correct: false },
      { text: "Just noticeable difference (JND)", correct: true },
      { text: "Perceptual limit", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question:
      "Which law states that the perceived intensity of a stimulus decreases with prolonged exposure?",
    answers: [
      { text: "Weber's Law", correct: true },
      { text: "Law of Sensory Adaptation", correct: false },
      { text: "Gestalt Law", correct: false },
      { text: "Law of Perceptual Constancy", correct: false },
    ],
  },
  {
    unit: "2",
    category: "Psychology",
    question: "Perceptual illusions often demonstrate the brain's tendency to:",
    answers: [
      { text: "Improve sensory accuracy", correct: false },
      { text: "Ignore external stimuli", correct: false },
      { text: "Detect subliminal messages", correct: false },
      {
        text: "Make sense of ambiguous or conflicting sensory information",
        correct: true,
      },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question: "Learning is defined as:",
    answers: [
      {
        text: "A fixed pattern of behavior in response to stimuli",
        correct: false,
      },
      {
        text: "A temporary change in behavior due to external influence",
        correct: false,
      },
      {
        text: "A relatively permanent change in behavior due to experience",
        correct: true,
      },
      {
        text: "The innate ability to react to environmental changes",
        correct: false,
      },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question: "Which of the following is NOT a characteristic of learning?",
    answers: [
      { text: "It is a continuous process", correct: false },
      {
        text: "It involves the acquisition of new knowledge or skills",
        correct: false,
      },
      { text: "It occurs solely through direct experience", correct: true },
      { text: "It leads to a change in behavior", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question:
      'The principle of "reinforcement" is most closely associated with which learning theory?',
    answers: [
      { text: "Cognitive Learning Theory", correct: false },
      { text: "Behavioral Theory of Learning", correct: true },
      { text: "Social Learning Theory", correct: false },
      { text: "Constructivist Theory", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question:
      "Which factor is considered to most significantly influence learning?",
    answers: [
      { text: "Physical environment", correct: false },
      { text: "Genetic predisposition", correct: false },
      { text: "Motivation", correct: true },
      { text: "External rewards", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question:
      "According to Social Learning Theory, learning occurs primarily through:",
    answers: [
      { text: "Direct reinforcement and punishment", correct: false },
      { text: "The internal cognitive processing of stimuli", correct: false },
      { text: "Unconscious repetition of behavior", correct: false },
      { text: "Observation and imitation of others' behavior", correct: true },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question:
      'The concept of "latent learning," where knowledge is acquired without reinforcement, is part of which theory?',
    answers: [
      { text: "Social Learning Theory", correct: false },
      { text: "Cognitive Learning Theory", correct: true },
      { text: "Classical Conditioning", correct: false },
      { text: "Behavioral Theory", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question:
      "Which of the following principles is a fundamental concept in Cognitive Learning Theory?",
    answers: [
      {
        text: "Mental representation and processing of information",
        correct: true,
      },
      { text: "Stimulus-response connection", correct: false },
      { text: "Observational learning", correct: false },
      { text: "Reflexive conditioning", correct: false },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question:
      'Which of the following best explains the principle of "practice" in learning?',
    answers: [
      { text: "Repetition of a task to improve performance", correct: true },
      {
        text: "Application of new knowledge in different contexts",
        correct: false,
      },
      { text: "Avoidance of errors to speed up learning", correct: false },
      {
        text: "Providing immediate feedback after every trial",
        correct: false,
      },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question: "The Behavioral Theory of Learning is most likely to emphasize:",
    answers: [
      {
        text: "The role of personal beliefs and attitudes in learning",
        correct: false,
      },
      {
        text: "The impact of external stimuli and reinforcement on behavior",
        correct: true,
      },
      {
        text: "The construction of new knowledge through experience",
        correct: false,
      },
      {
        text: "The effects of group dynamics on individual learning",
        correct: false,
      },
    ],
  },
  {
    unit: "3",
    category: "Psychology",
    question: "Social Learning Theory introduces the concept of:",
    answers: [
      { text: "Reflexive learning", correct: false },
      { text: "Unconscious motivation", correct: false },
      { text: "Vicarious reinforcement", correct: true },
      { text: "Operant conditioning", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question: 'Choose the correct usage of "do" or "make":',
    answers: [
      { text: "She will do a bed after breakfast.", correct: false },
      { text: "She will make a bed after breakfast.", correct: false },
      { text: "She will make the bed after breakfast.", correct: true },
      { text: "She will do the bed after breakfast.", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question: 'Select the sentence where "make" is used incorrectly:',
    answers: [
      { text: "We made arrangements for the trip.", correct: false },
      { text: "They made a decision to relocate.", correct: false },
      { text: "He made a great effort to finish on time.", correct: false },
      { text: "She makes the laundry every Sunday.", correct: true },
    ],
  },
  {
    unit: "3",
    category: "English",
    question:
      "I am sorry Mr. Green is out at the moment. Would you like to _______ a message for him?(from final exam)",
    answers: [
      { text: "Make", correct: false },
      { text: "Leave", correct: false },
      { text: "Do", correct: true },
      { text: "Give", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question: "",
    answers: [
      { text: "He will do the dishes tonight.", correct: true },
      { text: "We should make the dishes now.", correct: false },
      { text: "I need to make my homework.", correct: false },
      { text: "She did a cake for the party.", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question:
      'Identify the type of conditional used: "If she had known, she would have come earlier."',
    answers: [
      { text: "Zero Conditional", correct: false },
      { text: "Third Conditional", correct: true },
      { text: "First Conditional", correct: false },
      { text: "Second Conditional", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question: "Which sentence is an example of the Second Conditional?",
    answers: [
      {
        text: "If she had seen him, she would have spoken to him.",
        correct: false,
      },
      { text: "If you heat water, it boils.", correct: false },
      {
        text: "If I won the lottery, I would travel the world.",
        correct: true,
      },
      { text: "If he comes, we will start the meeting.", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question:
      "After John _________ the film on TV, he planned to go for a walk.(from final exams)",
    answers: [
      { text: "Had been", correct: true },
      { text: "Saw", correct: false },
      { text: "Had been seen", correct: false },
      { text: "Has seen", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question:
      "You will see crocodiles if you _________ Arba Minch.(from final exams)",
    answers: [
      { text: "Would go", correct: false },
      { text: "Goes", correct: false },
      { text: "Have gone", correct: false },
      { text: "Go", correct: true },
    ],
  },
  {
    unit: "3",
    category: "English",
    question:
      "The harvest __________ immense if the weather was very good last year.(from final exams)",
    answers: [
      { text: "Would be", correct: true },
      { text: "Could have been", correct: false },
      { text: "Will be", correct: false },
      { text: "May be", correct: false },
    ],
  },
  {
    unit: "3",
    category: "English",
    question:
      "_________ you hold a reasonable attitude, you won't be successful in your life.(from final exams)",
    answers: [
      { text: "Unless", correct: true },
      { text: "If", correct: false },
      { text: "Provided that", correct: false },
      { text: "As long as", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question:
      "I am sitting in class right now. I ________ on the same seat every day.(from final exams)",
    answers: [
      { text: "Sits", correct: false },
      { text: "Sit", correct: true },
      { text: "Sat", correct: false },
      { text: "Have sat", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question:
      "Tadesse would have come to dinner if you _________ him yesterday.(from fial exams)Dindn't insult",
    answers: [
      { text: "Haven't insult", correct: false },
      { text: "Didn't insult", correct: false },
      { text: "Won't insult", correct: false },
      { text: "hadn't insulted", correct: true },
    ],
  },
  {
    unit: "2",
    category: "English",
    question:
      "Professser worku _________ so much about mursi tribe if he were an expert on African tribal group.(from final exams)",
    answers: [
      { text: "Talk", correct: false },
      { text: "Would talk", correct: true },
      { text: "Would have talk", correct: false },
      { text: "Talked", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question:
      "My uncle would stay in New  York if he ______ much work here.(from final exams)",
    answers: [
      { text: "Had", correct: true },
      { text: "Would have had", correct: false },
      { text: "Has", correct: false },
      { text: "Had had", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question: "I ________ here since I graduated school.(from final exams)",
    answers: [
      { text: "Work", correct: false },
      { text: "Have worked", correct: true },
      { text: "Works", correct: false },
      { text: "Had worked", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question: "He ———- his leg, so he can't play football.",
    answers: [
      { text: "Have broken", correct: false },
      { text: "Had broken", correct: false },
      { text: "Breaks", correct: false },
      { text: "Has broken", correct: true },
    ],
  },
  {
    unit: "2",
    category: "English",
    question:
      "After she _________ her home work, shen went to lunch.(from final exams)",
    answers: [
      { text: "Finished", correct: false },
      { text: "Has finished", correct: false },
      { text: "Had finished", correct: true },
      { text: "Finishes", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question: "She _____with her husband every evening.(from final exams)",
    answers: [
      { text: "Didn't walk", correct: false },
      { text: "Doesn't walk", correct: true },
      { text: "Had not walked", correct: false },
      { text: "Hasn't walked", correct: false },
    ],
  },
  {
    unit: "2",
    category: "English",
    question: "What time _____ you ____ to bed last night?(from final exams)",
    answers: [
      { text: "Have/Went", correct: false },
      { text: "Do/Been", correct: false },
      { text: "None", correct: false },
      { text: "Did/Go", correct: true },
    ],
  },
  {
    unit: "2",
    category: "English",
    question: "Jerry ______________a letter to me last year.(from final exams)",
    answers: [
      { text: "Wrote", correct: true },
      { text: "Is written", correct: false },
      { text: "Was written", correct: false },
      { text: "Writes", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙫𝙚𝙧𝙗𝙖𝙩𝙞𝙢",
    answers: [
      { text: "Choose randomly", correct: false },
      { text: "Repeat word by word", correct: true },
      { text: "Take advantage over", correct: false },
      { text: "Make a decision", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙝𝙪𝙢𝙚𝙧𝙤𝙪𝙨",
    answers: [
      { text: "Exciting", correct: false },
      { text: "Enjoyable", correct: true },
      { text: "Amazing", correct: false },
      { text: "Perfect", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙘𝙪𝙧𝙨𝙤𝙧𝙮",
    answers: [
      { text: "Seeing without attention", correct: true },
      { text: "Read intensively", correct: false },
      { text: "Main part of something", correct: false },
      { text: "Vital", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙡𝙞𝙣𝙘𝙝𝙥𝙞𝙣",
    answers: [
      { text: "Disappointing", correct: false },
      { text: "Tap something", correct: false },
      { text: "Backbone(vital) for something", correct: true },
      { text: "Make someone fool", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙚𝙡𝙖𝙩𝙚𝙙",
    answers: [
      { text: "Excited, happiness", correct: true },
      { text: "Wrinkle", correct: false },
      { text: "Strength", correct: false },
      { text: "Potable", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙤𝙗𝙨𝙘𝙚𝙣𝙚",
    answers: [
      { text: "Excluded", correct: false },
      { text: "Main part of movie(scene)", correct: false },
      { text: "Use offfensive terms", correct: true },
      { text: "", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙙𝙤𝙬𝙧𝙮",
    answers: [
      { text: "Strong", correct: false },
      { text: "Dormant", correct: false },
      { text: "Easy going", correct: false },
      { text: "Bride price", correct: true },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "Potable",
    answers: [
      { text: "Clear", correct: false },
      { text: "Drinkable", correct: true },
      { text: "Enjoyable", correct: false },
      { text: "Moveable", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "",
    answers: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    unit: "1",
    category: "English",
    question: "𝙡𝙪𝙜𝙜𝙖𝙜𝙚",
    answers: [
      { text: "Disorder", correct: false },
      { text: "Dirty", correct: false },
      { text: "Baggage", correct: true },
      { text: "Mandicant", correct: false },
    ],
  },
];

let questionIndex = 0;
let score = 0;
let selectedTime;
let selectedNumQuestions;
let timeRemaining;
let timerInterval;
let answered = questionsArry[questionIndex].answered;

// Event Listeners
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("click", closeMenuOnClickOutside);
homeButton.addEventListener("click", () => displaySection(homeSection));
aboutButton.addEventListener("click", () => displaySection(aboutSection));
homeStartButton.addEventListener("click", () =>
  displaySection(preferenceSection)
);
startQuizButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", goBackToPreference);
nextButton.addEventListener("click", displayNextFilteredQuestion);
prevButton.addEventListener("click", displayPreviousFilteredQuestion);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

function toggleMenu() {
  const isMenuOpen = menuSection.style.width === "70%";
  menuSection.style.width = isMenuOpen ? "0" : "70%";
}

function closeMenuOnClickOutside(e) {
  if (!menuSection.contains(e.target) && e.target !== menuButton) {
    menuSection.style.width = "0%";
  }
}

function displaySection(section) {
  [homeSection, aboutSection, preferenceSection, mainContent].forEach(
    (sec) => (sec.style.display = "none")
  );
  section.style.display = "flex";
  menuSection.style.width = "0";
  questionIndex = 0;
  updatePreference();
  score = 0;
  clearInterval(timerInterval);
}

// Function to Start Quiz
function startQuiz() {
  nextButton.style.display = "block";
  selectedTime = parseInt(document.querySelector("#timePerQuestion").value, 10);
  selectedNumQuestions = parseInt(
    document.querySelector("#num-questions").value,
    10
  );
  totalQuestionDisplay.textContent = selectedNumQuestions;
  mainContent.style.display = "flex";
  preferenceSection.style.display = "none";
  displayFirstFilteredQuestion();
  startCountdown();
  calculateTime();
}

function resetState() {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
}

function startCountdown() {
  clearInterval(timerInterval);
  timeRemaining = selectedTime;
  if (questionIndex > 0) prevButton.style.display = "block";
  const updateInterval = 10;
  const timeStep = selectedTime / (selectedTime * (1000 / updateInterval));

  timerInterval = setInterval(() => {
    selectedTime = parseInt(
      document.querySelector("#timePerQuestion").value,
      10
    );
    selectedNumQuestions = parseInt(
      document.querySelector("#num-questions").value,
      10
    );
    timeRemaining -= timeStep;
    timerBar.style.width = `${(timeRemaining / selectedTime) * 100}%`;
    timeSlap.textContent = `${Math.ceil(timeRemaining)}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timeSlap.textContent = 0;
      if (questionIndex < selectedNumQuestions - 1) {
        questionIndex++;
        loadFilteredQuestion(questionIndex);
        startCountdown();
      }
    }
  }, updateInterval);
}

function endQuiz() {
  clearInterval(timerInterval);
  alert(`Quiz finished! Your score is: ${score}`);
}

function createAnswerButton(answer) {
  const button = document.createElement("button");
  button.classList.add("answer");
  button.classList.add("answers-style");
  button.textContent = answer.text;
  if (answer.correct) {
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
  answerContainer.appendChild(button);
}

function selectAnswer(e) {
  clearInterval(timerInterval);
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  selectedButton.style.backgroundColor = isCorrect ? "#34f03d" : "#fb5e15";
  if (isCorrect) {
    score++;
    answered = true;
  }
  Array.from(answerContainer.children).forEach((button) => {
    if (button.dataset.correct) button.style.backgroundColor = "#34f03d";
    button.disabled = true;
  });
  scoreDisplay.textContent = score;
}

function goBackToPreference() {
  mainContent.style.display = "none";
  clearInterval(timerInterval);
  questionIndex = 0;
  score = 0;
  preferenceSection.style.display = "flex";
}

function calculateTime() {
  timeSlap.textContent = `${selectedTime}`;

  //timerBar.style.width = `${selectedTime*3}%`;
}

const subjectSelect = document.querySelector("#category");
const preferenceForm = preferenceSection.querySelector("form");

let filteredQuestions = [];
preferenceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const subjectSelect = document.querySelector("#category");
  const unitSelect = document.querySelector("#unit");

  const displayUnit = document.querySelector("#selected-unit");

  //const selectedSubject = subjectSelect.value;
  const selectedSubjects = Array.from(subjectSelect.selectedOptions).map(
    (option) => option.value
  );

  const selectedUnits = Array.from(unitSelect.selectedOptions).map(
    (option) => option.value
  );
  displayUnit.textContent = `Unit ${unitSelect.value}`;
  filterQuestionsBySubject(selectedSubjects, selectedUnits);
  startQuiz();
});

function filterQuestionsBySubject(subject, unit) {
  filteredQuestions = questionsArry.filter(
    (question) =>
      subject.includes(question.category) && unit.includes(question.unit)
  );
}

function displayFirstFilteredQuestion() {
  resetState();
  updatePreference();
  loadFilteredQuestion(questionIndex);
  prevButton.style.display = "none";
}

function loadFilteredQuestion(index) {
  resetState();
  selectedTime = parseInt(document.querySelector("#timePerQuestion").value, 10);
  selectedNumQuestions = parseInt(
    document.querySelector("#num-questions").value,
    10
  );
  if (filteredQuestions.length > 0) {
    const currentQuestion = filteredQuestions[index];
    categoryDisplay.textContent = currentQuestion.category;
    questionText.textContent = `${index + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach((answer) => createAnswerButton(answer));
  } else {
    goBackToPreference();
  }
  updatePreference();
}

function displayNextFilteredQuestion() {
  nextButton.style.display = "block";
  selectedTime = parseInt(document.querySelector("#timePerQuestion").value, 10);
  selectedNumQuestions = parseInt(
    document.querySelector("#num-questions").value,
    10
  );
  if (questionIndex < selectedNumQuestions - 1) {
    if (questionIndex < filteredQuestions.length - 1) {
      questionIndex++;
      loadFilteredQuestion(questionIndex);
      startCountdown();
      prevButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }
  } else {
    nextButton.style.display = "none";
    endQuiz();
  }
}

function displayPreviousFilteredQuestion() {
  if (questionIndex > 0) {
    questionIndex--;
    startCountdown();
    loadFilteredQuestion(questionIndex);
    nextButton.style.display = "block";
  }
  if (answered) {
    score--;
  }
  if (questionIndex === 0) {
    prevButton.style.display = "none";
  }
}

function updatePreference() {
  totalQuestionDisplay.textContent = selectedNumQuestions;
  scoreDisplay.textContent = score;
}
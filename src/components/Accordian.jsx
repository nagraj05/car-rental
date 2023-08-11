import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className=" bg-red-500 text-white p-4 flex justify-between items-center focus:outline-none"
        style={{ width: "700px" }}
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium ">{question}</span>
        <span className={isOpen ? "transform rotate-180" : ""}>▼</span>
      </button>
      {isOpen && (
        <div
          className="p-4 bg-gray-100 font-poppins"
          style={{ width: "700px" }}
        >
          <p className="text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You typically need a valid driver's license, a credit card in your name, and proof of insurance.",
    },
    {
      question: "What is the minimum age to rent a car?",
      answer: "The minimum age is between 21 and 25 years old.",
    },
    {
      question: "Is insurance included in the rental price?",
      answer:
        "We do not include insurance. You can either purchase insurance from the rental company or check if your personal auto insurance or credit card offers coverage for rental cars.",
    },
    {
      question: "What if I need to cancel or modify my reservation?",
      answer: "We offer free cancellation within 3hrs before the pickup time.",
    },
    {
      question:
        "Can I rent a car one way and drop it off at a different location?",
      answer:
        "Yes, we offer one-way rentals, allowing you to pick up a car at one location and return it to another. However, one-way fees may apply, and availability may vary.",
    },
    {
      question: "Can I add a GPS or child car seat to my rental?",
      answer:
        "All our cars are GPS enabled. You can use addons for child car seat.",
    },
    {
      question: "What do I do in case of an accident or breakdown?",
      answer:
        "In case of an accident, contact the local authorities and the rental car company immediately.",
    },
  ];

  return (
    <div className=" mx-auto flex mt-4 flex-col items-center mb-5">
      <h2 className=" text-5xl font-rob font-bold mb-5">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-400 mb-5 w-2/5 text-lg text-center">
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeAccordion === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};

export default Accordion;

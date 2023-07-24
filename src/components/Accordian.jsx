import { useState } from "react";

const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className=" bg-red-600 text-white p-4 flex justify-between items-center focus:outline-none" style={{width:'600px'}}
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className={isOpen ? "transform rotate-180" : ""}>▼</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100" style={{width:'600px'}}>
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
      question: "What is your return policy?",
      answer:
        "Our return policy allows customers to return items within 30 days of purchase. Please check our return policy page for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to selected countries. You can find the list of countries we ship to on our shipping information page.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className=" mx-auto flex mt-4 flex-col items-center" style={{ height: "60vh" }}>
        <h4 className="text-2xl font-rob font-bold">FAQ</h4>
      <h2 className=" text-5xl font-rob font-bold mb-5">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-400 mb-5 text-lg text-center">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
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

export default Accordion;

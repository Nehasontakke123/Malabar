// const BridalQuote = () => {
//     const bridalQuotes = [
//       "A bride is a woman with a fine prospect of happiness behind her.",
//       "Happiness and confidence are the prettiest things you can wear on your wedding day.",
//       "A wedding dress is both intimate and personal for a woman—it must reflect her personality and style.",
//       "A happy marriage is a long conversation that always seems too short.",
//       "True love stories never have endings.",
//       "Every bride is beautiful. It’s like newborn babies or puppies. They can’t help it.",
//       "A wedding is the golden ring in a chain whose beginning is a glance and whose ending is eternity.",
//     ];
  
//     return (
//       <div className="bride-quote-container">
//         <div className="bride-quote-wrapper">
//           {bridalQuotes.map((quote, index) => (
//             <blockquote key={index} className="bride-quote">
//               “{quote}”
//             </blockquote>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default BridalQuote;
  






import { useState, useEffect } from "react";
import '../assets/css/BridalQuote.css'

const BridalQuote = () => {
  const bridalQuotes = [
    "A bride is a woman with a fine prospect of happiness behind her.",
    "Happiness and confidence are the prettiest things you can wear on your wedding day.",
    "A wedding dress is both intimate and personal for a woman—it must reflect her personality and style.",
    "A happy marriage is a long conversation that always seems too short.",
    "True love stories never have endings.",
    "Every bride is beautiful. It’s like newborn babies or puppies. They can’t help it.",
    "A wedding is the golden ring in a chain whose beginning is a glance and whose ending is eternity.",
  ];

  const [currentQuote, setCurrentQuote] = useState(bridalQuotes[0]);

  // Auto-change quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bridalQuotes.length);
      setCurrentQuote(bridalQuotes[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bride-quote-container">
      <div className="bride-quote-wrapper">
        {/* Beautiful heading */}
        <h2 className="bride-quote-heading">✨ Beautiful Bridal Quotes ✨</h2>
        {/* Displaying auto-changing quote */}
        <blockquote className="bride-quote">“{currentQuote}”</blockquote>
      </div>
    </div>
  );
};

export default BridalQuote;

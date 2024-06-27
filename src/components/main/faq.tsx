/* eslint-disable @next/next/no-img-element */
import React from "react";
import FaqItem from "@/components/main/faqItem";

type FAQ = {
  title: string,
  description: string
}

const faqs: FAQ[] = [
  {
    title: 'WHO IS RICHY SOONAK?',
    description: 'SOONAK is a meme coin created on and living in the Solana Ecosystem!'
  },
  {
    title: 'WHAT CHAIN IS APED ON?',
    description: '$SOONAK is on the Solana Chain, a layer 1 blockchain. Learn more about solana chain here https://docs.solana.org/'
  },
  {
    title: 'HOW CAN I BUY $SOONAK?',
    description: 'Please refer to our how to buy section mentioned above.'
  },
]

const FAQ = () => {

  return (
    <section id="faq" className="section-faq p-left p-right !font-snow">
      <div className="container5 align-middle">
        <h2
          className="heading text-white text-center md:text-left w-full md:w-auto"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          faq
        </h2>
        <div className="accordion-container">
          {
            faqs.map((_faq: FAQ) => <FaqItem key={_faq.title} title={_faq.title} description={_faq.description}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default FAQ;

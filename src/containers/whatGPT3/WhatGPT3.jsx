import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-4" text="GPT-4 is an advanced language model with the potential to enhance chatbot interactions and generate more accurate and comprehensive responses based on a vast knowledgebase, leading to potential improvements in education." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">GPT-4 is an upcoming language model that will advance chatbots, knowledgebase, and education.</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chat GPT is a powerful AI language model that can be used to build intelligent chatbots that can understand and generate human-like responses to natural language inputs." />
      <Feature title="Knowledgebase" text="hat GPT is a state-of-the-art language model that uses advanced deep learning algorithms to process and generate natural language text, which can be used to enhance and expand knowledge bases for various domains and applications. b" />
      <Feature title="Education" text="Chat GPT is an innovative educational tool that can be used to improve students' reading and writing skills, as well as to enhance their understanding of complex subjects by generating accurate and coherent explanations in natural language. b" />
    </div>
  </div>
);

export default WhatGPT3;

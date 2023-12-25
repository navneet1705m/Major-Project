import React, { useState } from 'react';

const TourismInfoBox = ({ title, data }) => (
  <div className="p-6 mb-4 transition-transform transform bg-purple-600 rounded-lg shadow-md hover:scale-95 ">
    <h2 className="mb-4 text-3xl font-bold text-amber-400">{title}</h2>
    <ul className="pl-6 list-disc">
      {data.map((info, index) => (
        <li key={index} className="text-white">{info}</li>
      ))}
    </ul>
  </div>
);

const ResultDisplay = ({ result }) => (
  <div className="p-6 mb-4 transition-transform transform bg-green-600 rounded-lg shadow-md hover:scale-95 ">
    <h2 className="mb-4 text-3xl font-bold text-white">OpenAI Result</h2>
    <p className="text-white">{result}</p>
  </div>
);

const SeeAndDo = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [openAIResult, setOpenAIResult] = useState('');

  const callOpenAI = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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', // Replace with your actual API key
        },
        body: JSON.stringify({
          prompt: userMessage,
          max_tokens: 50, // You can adjust the max_tokens based on your needs
        }),
      });

      if (!response.ok) {
        throw new Error('OpenAI API request failed');
      }

      const result = await response.json();

      // Process the result
      const chatGPTResponse = result.choices[0].text;

      // Update chat history state
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: userMessage, chatgpt: chatGPTResponse },
      ]);

      // Update OpenAI result state
      setOpenAIResult(chatGPTResponse);

      // Clear the user message input
      setUserMessage('');
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    }
  };

  // Sample tourism and travel information
  const travelInfo = [
    "Explore historical landmarks like the Taj Mahal.",
    "Visit vibrant cities such as Delhi and Mumbai.",
    "Experience diverse cultures and traditions.",
    // Add more points as needed
  ];

  // Sample data for things to do in India
  const thingsToDoInIndia = [
    "Take a boat ride in Kerala's backwaters.",
    "Explore the forts of Rajasthan, like Amer Fort and Mehrangarh Fort.",
    "Attend a traditional dance performance, such as Kathak or Bharatanatyam.",
    // Add more points as needed
  ];

  return (
    <div className="flex flex-col h-screen text-purple-900 bg-white">
      <div className="container p-4 mx-auto mt-8">
        <div className="mb-4">
          {/* Display OpenAI result */}
          {openAIResult && <ResultDisplay result={openAIResult} />}

          {/* Display chat history */}
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-2">
              <strong>User:</strong> {chat.user}
              <br />
              <strong>ChatGPT:</strong> {chat.chatgpt}
              <hr className="my-2 border-gray-700" />
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-4 text-purple-900 bg-white border border-purple-500 rounded-full focus:outline-none"
          />
          <button
            onClick={callOpenAI}
            className="px-6 py-3 text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>

      {/* Tourism and travel information section */}
      <TourismInfoBox title="Explore India for Tourism and Travel" data={travelInfo} />

      {/* Things to do in India section */}
      <TourismInfoBox title="What to Do in India" data={thingsToDoInIndia} />
    </div>
  );
};

export default SeeAndDo;

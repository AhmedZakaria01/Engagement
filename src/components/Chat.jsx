import React, { useState, useEffect } from "react";
import { ChatFeed, Message } from "react-chat-ui";
import "../components/Chat.css";
const Chat = ({ data }) => {
  const [messages, setMessages] = useState([]);

  // Function to format the created_at timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  // Process API data to map messages
  useEffect(() => {
    if (data && data.length > 0) {
      const mappedMessages = data
        .filter((msg) => msg.view)
        .map((msg) => {
          const formattedTimestamp = formatTimestamp(msg.created_at);

          // Wrap message and timestamp inside a div to avoid <p> tag issues
          const formattedMessage = new Message({
            id: msg.id,
            message: (
              <div>
                <span>{msg.message}</span> {/* Message text */}
                <div className="text-xs text-gray-500 mt-1">
                  {formattedTimestamp}
                </div>
                {/* Timestamp */}
              </div>
            ),
            senderName: `From ${msg.name} - - -  to    - - - ${msg.to}`, // Sender's name
            messageTo: msg.to, // Receiver's name
          });

          return formattedMessage;
        });
      setMessages(mappedMessages);
    }
  }, [data]);

  return (
    <div className="chat-bg h-screen bg-black flex flex-col items-center justify-center  ">
      <div className="w-full max-w-2xl shadow-xl rounded-2xl p-2 flex flex-col">
        <h3 className="text-sm font-think font-san text-center text-white pb-3">
          Cool, you're very special because you're here now ♥ <br /> Now You Can
          Enjoy Our Engagement Celebrations ♥
        </h3>
        <h2 className="text-xl font-mono font-bold text-center text-white mb-4">
          Boyka ♥ Fulla
        </h2>
        <div
          className="overflow-y-auto flex-grow border border-gray-300 rounded-lg p-4"
          style={{
            minHeight: "200px",
            maxHeight: "700px",
            overflowY: "auto", // Make sure overflowY is set to auto to allow scrolling
          }}
        >
          <ChatFeed
            messages={messages} // Array of message objects
            showSenderName // Show the sender's name (true/false)
            bubblesCentered={false} // Align bubbles left and right (similar to WhatsApp)
            // Change background color of the chat bubble based on the sender
            bubbleStyles={{
              text: {
                fontFamily: "mono", // Change the font family here
              },
              chatbubble: {
                backgroundColor: "#123", // You can adjust the background color for the chat bubbles
              },
            }}
            messageDirection="left" // Default message direction
            disableBubbleAnimation={false}
            senderNamePosition="before"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;

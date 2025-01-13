import { useEffect, useState } from "react";
import supabase from "../supabase";
import Chat from "./Chat";
import { data } from "react-router-dom";

function MessagesViewer() {
  const [messages, setMessages] = useState([]); // State to store messages

  const fetchMessages = async () => {
    let { data, error } = await supabase.from("messages").select("*");

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      console.log(data);

      setMessages(data); // Store the fetched messages in state
    }
  };

  useEffect(() => {
    fetchMessages();
    // console.log(messages);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <Chat data={messages} />
    </div>
  );
}

export default MessagesViewer;

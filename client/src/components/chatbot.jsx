import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/08/01/10/20250801102149-8OD9MV0G.js";
      script2.defer = true;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);
  }, []);

  return null;
}

export default Chatbot;
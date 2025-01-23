let transcript = [
    { time: 10, timeFormatted: "00:00:10", text: "This is the intro." },
    { time: 45, timeFormatted: "00:00:45", text: "Now we explain the topic." },
    { time: 90, timeFormatted: "00:01:30", text: "Conclusion." }
  ];
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'search') {
      const results = transcript.filter((item) =>
        item.text.toLowerCase().includes(message.query)
      );
      sendResponse(results);
    } else if (message.action === 'navigate') {
      const video = document.querySelector('video');
      video.currentTime = message.time;
      video.play();
    }
  });
  
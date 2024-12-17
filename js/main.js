const getMessage = function (message) {
  if (typeof message !== "string") {
    return "Полученное сообщение не является строкой!";
  }

  message = message.trim();

  if (message.length > 30) {
    return message.slice(0, 30) + "...";
  }

  return message;
};

console.log(
  getMessage(
    " ввввввлвлвлвлвлцущацущоацшуаоцушацушащцташцтацшуатцшуатцшщуашцутшацштуашцу"
  )
);

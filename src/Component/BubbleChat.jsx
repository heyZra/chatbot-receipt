const BubbleChat = (props) => {
  const { children, reply = false, type = "" } = props;
  return (
    <>
      <div
        className={`h-fit px-7 py-2 max-w-xl w-fit mb-2 rounded-t-3xl ${
          reply
            ? "bg-green-200 ml-auto text-right rounded-bl-3xl"
            : `${
                type ? "border-2 text-white" : "bg-green-200"
              } text-left rounded-br-3xl`
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default BubbleChat;

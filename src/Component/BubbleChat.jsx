const BubbleChat = (props) => {
  const { children, reply = false, type = "" } = props;
  return (
    <>
      <div
        className={`h-fit px-7 py-2 w-1/4 max-w-xs mb-2 min-w-fit rounded-t-3xl ${
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

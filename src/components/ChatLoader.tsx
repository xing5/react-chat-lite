export const ChatLoader = () => (
  <div className="flex flex-col animate-fade-in">
    <div className="flex mb-2 w-full items-center">
      <div className="flex relative items-start chatlite-host-bubble">
        <div
          className="flex items-center absolute px-4 py-2 bubble-typing "
          style={{
            width: '64px',
            height: '32px',
          }}
          data-testid="host-bubble"
        >
          <div className="flex items-center">
            <div
              className="w-2 h-2 mr-1 rounded-full bubble1"
            />
            <div className="w-2 h-2 mr-1 rounded-full bubble2" />
            <div className="w-2 h-2 rounded-full bubble3" />
          </div>
        </div>
        <p className="overflow-hidden text-fade-in mx-4 my-2 whitespace-pre-wrap slate-html-container relative opacity-0 h-6 text-ellipsis" />
      </div>
    </div>
  </div>
);

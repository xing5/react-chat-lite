import { ButtonTheme } from "@/types"

interface Props extends ButtonTheme {
  isChatOpened: boolean
  toggleChat: () => void
}

const defaultButtonColor = '#0042DA'
const defaultIconColor = 'white'

export const BubbleButton = (props: Props) => {
 return (
    <button
      onClick={() => props.toggleChat()}
      className={
        'fixed bottom-5 right-5 shadow-md  rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 flex justify-center items-center animate-fade-in' +
        (props.size === 'lg' ? ' w-16 h-16' : ' w-12 h-12')
      }
      style={{
        backgroundColor: props.bgColor ?? defaultButtonColor,
        zIndex: 42424242,
      }}
    >
      {!props.customIconSrc && 
        <svg
          viewBox="0 0 24 24"
          style={{
            stroke: props.iconColor ?? defaultIconColor,
          }}
          className={
            `stroke-2 fill-transparent absolute duration-200 transition ` +
            (props.isChatOpened
              ? 'scale-0 opacity-0'
              : 'scale-100 opacity-100') +
            (props.size === 'lg' ? ' w-9' : ' w-7')
          }
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      }
      {props.customIconSrc && 
        <img
          src={props.customIconSrc}
          className={
            'rounded-full object-cover' +
            (props.size === 'lg' ? ' w-9 h-9' : ' w-7 h-7')
          }
          alt="Bubble button icon"
        />
      }

      <svg
        viewBox="0 0 24 24"
        style={{ fill: props.iconColor ?? 'white' }}
        className={
          `absolute duration-200 transition ` +
          (props.isChatOpened
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 -rotate-180 opacity-0') +
          (props.size === 'lg' ? ' w-9' : ' w-7')
        }
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
        />
      </svg>
    </button>
  )
}

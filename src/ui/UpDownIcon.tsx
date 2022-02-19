export default ({ status }: { status: boolean }) => {
  if (status)
    return (
      <svg
        className="w-5 h-5 ml-2 -mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    )

  return (
    <svg
    className="w-5 h-5 ml-2 -mr-1"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}

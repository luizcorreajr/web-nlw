import { ComponentProps, ReactNode } from "react"

interface IconButtonProps {
  children: ReactNode
}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors durantion-300 hover:bg-blue hover:text-gray-900">
      {props.children}
    </button>
  )
}
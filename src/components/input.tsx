import { Mail } from 'lucide-react'
import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {}

export function Input(props:InputProps) {
  return (
    <div className="flex items-center gap-2 px-4 h-12 bg-gray-800 border border-gray-600 rounded-xl">
      <span className="text-gray-400">
        <Mail />
      </span>

      <div>
        <input 
          className="flex-1 outline-0"
          {...props}
        />
      </div>
    </div>
  )
}
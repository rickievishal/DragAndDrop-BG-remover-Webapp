import React from 'react'

const Button = ({className,onClick,children}) => {
  return (
    <button className={`bg-[var(--primary-color)] px-4 py-1 rounded-md border border-[var(--border-color)] ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
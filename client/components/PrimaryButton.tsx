interface ButtonProps {
  url?: string
  label: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ url, label }) => {
  const handleClick = () => {
    window.open(url, '_blank')
  }

  return <button onClick={handleClick}>{label}</button>
}

export default Button

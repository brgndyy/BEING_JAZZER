import useMetronomeContext from './useMetronomeContext';

interface ButtonProps {
  className?: string;
  buttonContents?: [string, string] | [React.ReactNode, React.ReactNode];
}

function Button({ className = '', buttonContents = ['Play', 'Pause'] }: ButtonProps) {
  const { isPlaying, handleTogglePlaying } = useMetronomeContext();

  return (
    <button className={className} onClick={handleTogglePlaying}>
      {isPlaying ? buttonContents[1] : buttonContents[0]}
    </button>
  );
}

export default Button;

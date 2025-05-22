import { MotionConfig } from 'framer-motion';

interface MotionProviderProps {
  children: React.ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig>
      {children}
    </MotionConfig>
  );
}
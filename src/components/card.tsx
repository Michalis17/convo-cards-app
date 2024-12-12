import { motion } from "framer-motion";

type CardProps = {
  question: string;
  onDragEnd: (direction: string) => void;
};

const Card: React.FC<CardProps> = ({ question, onDragEnd }) => {
  return (
    <motion.div
      className="w-72 h-96 bg-white rounded-lg shadow-lg flex justify-center items-center text-center absolute"
      drag={true}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          onDragEnd("right");
        } else if (info.offset.x < -100) {
          onDragEnd("left");
        }
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
    </motion.div>
  );
};

export default Card;

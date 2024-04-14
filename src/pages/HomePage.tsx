import UploadPhoto from "../components/UploadPhoto";

interface Props {
  stage: number;
  handleSetAmount: (paymentAmount: number) => void;
  nextStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function HomePage({ stage, handleSetAmount, nextStage }: Props) {
  return (
    <div>
      {stage === 0 && (
        <>
          <UploadPhoto onSetAmount={handleSetAmount} nextStage={nextStage} />
        </>
      )}
    </div>
  );
}

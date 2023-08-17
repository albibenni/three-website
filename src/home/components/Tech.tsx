import { technologies } from '../constants/recap.ts';
import BallCanvas from './canvas/BallCanvas.tsx';

export default function Tech() {
  return (
    <>
      <span className="hash-span" id={'technologies'}>
        &nbsp;
      </span>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div key={index} className="w-28 h-28">
            <BallCanvas tech={tech} />
          </div>
        ))}
      </div>
    </>
  );
}

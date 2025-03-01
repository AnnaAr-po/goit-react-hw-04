import { Audio } from 'react-loader-spinner';
import s from "./Loader.module.css";
    

const Loader = () => {
  return (
    <div className={s.loader}>
      <Audio
        visible={true}
        height="80"
        width="80"
        color="#646cff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
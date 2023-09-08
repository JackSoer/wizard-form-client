import loadingImg from '../../assets/images/loading.svg';
import './loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingImg} alt="loading..." />
    </div>
  );
};

export default Loading;

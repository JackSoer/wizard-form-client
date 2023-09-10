import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import './share.scss';
import shareInfo from '../../config/share';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MembersContext from '../../contexts/MembersContext';

const Share = () => {
  const { members } = useContext(MembersContext);

  return (
    <div className="share">
      <div className="container">
        <div className="share__btns">
          <TwitterShareButton
            url="http://91.107.207.176:81"
            title={shareInfo.tw}
          >
            <TwitterIcon round={true}></TwitterIcon>
          </TwitterShareButton>
          <FacebookShareButton
            quote={shareInfo.tw}
            title={shareInfo.tw}
            url="http://91.107.207.176:81"
          >
            <FacebookIcon round={true}></FacebookIcon>
          </FacebookShareButton>
        </div>
        <p className="share__members-link">
          <Link to="/all-members">All Members ({members.length})</Link>
        </p>
      </div>
    </div>
  );
};

export default Share;

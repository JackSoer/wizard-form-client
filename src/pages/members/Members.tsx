import { useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import MembersTableContent from '../../components/membersTableContent/MembersTableContent';
import MembersContext from '../../contexts/MembersContext';
import './members.scss';

const Members = () => {
  const { members, isLoading, fetchError } = useContext(MembersContext);

  return (
    <div className="members">
      <div className="container">
        {members.length > 0 && !isLoading && (
          <table className="members__table">
            <thead>
              <tr className="members__table-row">
                <th className="members__table-col-title">Photo</th>
                <th className="members__table-col-title">Full name</th>
                <th className="members__table-col-title">Report subject</th>
                <th className="members__table-col-title">Email</th>
              </tr>
            </thead>
            <MembersTableContent />
          </table>
        )}
        {isLoading && !fetchError && <Loading />}
        {!isLoading && !fetchError && members.length < 1 && (
          <div className="not-found">Members not found</div>
        )}
        {fetchError && !isLoading && (
          <div className="fetch-error">{fetchError}</div>
        )}
      </div>
    </div>
  );
};

export default Members;

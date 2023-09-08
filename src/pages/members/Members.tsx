import MembersTableContent from '../../components/membersTableContent/MembersTableContent';
import './members.scss';

const Members = () => {
  return (
    <div className="members">
      <div className="container">
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
      </div>
    </div>
  );
};

export default Members;
